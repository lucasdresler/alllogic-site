# ADR-0003: Camada de serviços e formulário de diagnóstico (`/contato`)

## Status

Implementada

## Contexto

A Home já continha o bloco Diagnóstico, com CTA "Vamos conversar" apontando para `/contato` — uma rota inexistente até este momento. A AllLogic definiu o formulário de diagnóstico (Empresa, Contato, Tel/Whats, Mensagem) e exigiu que ele fosse implementado, mas nenhuma integração de backend, e-mail, webhook ou CRM está configurada ou definida no projeto.

## Problema

Um formulário precisa de um destino para os dados enviados. Sem integração real definida, há duas formas erradas de resolver isso: (a) não implementar o formulário até que uma integração exista, deixando `/contato` incompleta, ou (b) implementar o formulário fingindo um envio bem-sucedido, o que seria enganoso — os dados não iriam a lugar nenhum de verdade.

## Alternativas consideradas

1. Não implementar o formulário agora, apenas a página com texto institucional (rejeitada — a tarefa exige o formulário funcional na camada de interface/validação).
2. Implementar o formulário com uma função de envio que sempre simula sucesso, mesmo sem integração real (rejeitada — instrução explícita de nunca fingir envio real).
3. Implementar o formulário completo (campos, validação client-side, acessibilidade, estados de UI) e isolar o envio em uma nova camada arquitetural (`src/services/`), com uma função de contrato estável que, na ausência de integração real, retorna honestamente um resultado de "não enviado" — nunca um sucesso fabricado.

## Decisão

Adotada a alternativa 3.

- Criada a camada `src/services/`, nova no projeto, com responsabilidade única: integração com serviços externos (ver `src/services/README.md`).
- Criada `src/services/diagnosisSubmission.ts`, exportando `submitDiagnosisRequest`. Sua implementação atual não faz nenhuma chamada de rede — não há endpoint, e-mail ou webhook para onde enviar — e sempre retorna `{ ok: false, reason: "integration-not-configured" }`.
- O formulário (`src/components/contact/DiagnosisForm.astro`) implementa o ciclo completo de estados (inicial, preenchimento com validação em `blur`, envio com botão desabilitado e rótulo "Enviando…", sucesso, erro) e chama `submitDiagnosisRequest`. Como a função sempre retorna `ok: false` hoje, o estado exibido ao usuário ao submeter dados válidos é honestamente o de erro ("Não foi possível enviar sua mensagem agora. Tente novamente em instantes.") — que é uma afirmação verdadeira sobre o estado atual do projeto, não uma mensagem genérica de erro transitório inventada para a ocasião.
- O estado de sucesso está implementado e pronto no código (mensagem, `form.reset()`, estilo), mas hoje é inatingível através do fluxo real, exatamente porque não existe envio real — ficará ativo assim que `submitDiagnosisRequest` for conectada a uma integração de verdade.

## Justificativa

Esta é a única forma de atender simultaneamente às duas exigências da tarefa: formulário com estados completos implementados, e nenhuma simulação de envio bem-sucedido sem backend real. Isolar o envio em `src/services/` (em vez de colocar a chamada direto no componente) significa que, quando uma integração real for definida, a mudança fica contida a um único arquivo, sem tocar em validação, acessibilidade ou apresentação.

## Consequências

- `/contato` está funcional em toda a experiência de interface (preenchimento, validação, acessibilidade, responsividade), mas **nenhuma mensagem enviada por um visitante chega à AllLogic hoje** — isso precisa ficar claro para quem for publicar o site: não publicar em produção como canal de contato real até a integração existir.
- Nova camada arquitetural (`src/services/`) documentada e com escopo restrito, evitando que vire um `lib/` genérico.

## Dependências

- Depende de uma decisão futura sobre qual integração real usar (endpoint próprio, serviço de e-mail transacional, webhook, etc.) — não tomada aqui, propositalmente, por falta de informação factual disponível.
- Depende também de `siteContent.contact` (ainda placeholder) para eventualmente informar um canal alternativo de contato na própria página.

## Referências

- `src/services/README.md`, `src/services/diagnosisSubmission.ts`
- `src/components/contact/DiagnosisForm.astro`
- `src/utils/validation.ts`
- ADR-0001 (CTA de Diagnóstico, que esta decisão implementa)

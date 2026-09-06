# ADR-0003: Camada de serviços e formulário de diagnóstico (`/contato`)

## Status

Implementada

## Contexto

A Home já continha o bloco Diagnóstico, com CTA "Vamos conversar" apontando para `/contato` — uma rota inexistente até este momento. A AllLogic definiu o formulário de diagnóstico (Empresa, Contato, Tel/Whats, Mensagem) e exigiu que ele fosse implementado. A integração adotada posteriormente utiliza um endpoint PHP próprio e o mecanismo de envio de e-mail disponível no servidor.

## Problema

Um formulário precisa de um destino para os dados enviados. Sem integração real definida, há duas formas erradas de resolver isso: (a) não implementar o formulário até que uma integração exista, deixando `/contato` incompleta, ou (b) implementar o formulário fingindo um envio bem-sucedido, o que seria enganoso — os dados não iriam a lugar nenhum de verdade.

## Alternativas consideradas

1. Não implementar o formulário agora, apenas a página com texto institucional (rejeitada — a tarefa exige o formulário funcional na camada de interface/validação).
2. Implementar o formulário com uma função de envio que sempre simula sucesso, mesmo sem integração real (rejeitada — instrução explícita de nunca fingir envio real).
3. Implementar o formulário completo (campos, validação client-side, acessibilidade, estados de UI) e isolar o envio em uma nova camada arquitetural (`src/services/`), com uma função de contrato estável.
4. Implementar um endpoint PHP próprio (`public/api/diagnosis.php`) para receber os dados do formulário e encaminhá-los ao e-mail institucional da AllLogic.

## Decisão

Adotadas as alternativas 3 e 4.

- Mantida a camada `src/services/`, com responsabilidade única de integração externa (ver `src/services/README.md`).
- `src/services/diagnosisSubmission.ts` exporta `submitDiagnosisRequest` e realiza uma requisição `POST` para `/api/diagnosis.php`, enviando os dados do formulário em JSON.
- Criado `public/api/diagnosis.php`, endpoint próprio responsável por validar os dados recebidos e encaminhar a mensagem ao endereço institucional `contato@alllogiconline.com.br` por meio do `sendmail` disponível no servidor.
- O formulário (`src/components/contact/DiagnosisForm.astro`) mantém o ciclo completo de estados (inicial, preenchimento com validação em `blur`, envio com botão desabilitado e rótulo "Enviando…", sucesso e erro) e agora está conectado ao fluxo real de envio.
- O estado de sucesso é exibido somente quando o endpoint confirma o processamento com `ok: true`; em caso de falha, o formulário apresenta o estado de erro.

## Justificativa

A solução mantém a separação entre apresentação e integração: o componente não conhece os detalhes do envio, enquanto `src/services/diagnosisSubmission.ts` concentra a comunicação com o endpoint. O endpoint PHP próprio recebe, valida e encaminha os dados ao e-mail institucional. Dessa forma, o fluxo de sucesso depende de uma confirmação real da integração, sem simulação.

## Consequências

- `/contato` está funcional como canal real de contato, incluindo preenchimento, validação, acessibilidade, responsividade e envio ao e-mail institucional.
- O endpoint PHP depende da infraestrutura de hospedagem e do mecanismo `sendmail` disponível no servidor.
- A camada arquitetural `src/services/` permanece documentada e com escopo restrito, evitando que vire um `lib/` genérico.

## Dependências

- Depende da disponibilidade do endpoint PHP e do mecanismo `sendmail` na hospedagem para realizar o encaminhamento das mensagens.
- Depende também de `siteContent.contact` (ainda placeholder) para eventualmente informar um canal alternativo de contato na própria página.

## Referências

- `src/services/README.md`, `src/services/diagnosisSubmission.ts`
- `src/components/contact/DiagnosisForm.astro`
- `src/utils/validation.ts`
- ADR-0001 (CTA de Diagnóstico, que esta decisão implementa)

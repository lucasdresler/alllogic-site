# services

Diretório destinado à **camada de integração externa** do site — o ponto de contato entre o Atlas e serviços de fora do próprio projeto (ex.: envio de formulário para um backend, e-mail, CRM, webhook).

## Responsabilidade de `src/services`

`src/services` isola qualquer chamada a um serviço externo em uma função com um contrato estável (entrada tipada, saída tipada), para que componentes de apresentação nunca precisem saber *como* ou *para onde* um dado é enviado — apenas chamam a função e reagem ao resultado.

Esta camada foi criada porque o projeto passou a ter uma necessidade real de envio de dados (formulário de diagnóstico) sem que uma integração de backend estivesse definida. Antes desta necessidade, essa camada não existia — não foi antecipada sem uso real (ver `docs/decisions/ADR-0003-camada-de-servicos-e-formulario-de-diagnostico.md`).

## Regra importante

Uma função em `src/services` **nunca finge sucesso quando não há integração real conectada**. Quando uma integração ainda não está definida, a função deve deixar isso explícito no seu retorno (ex.: um resultado que indique que o envio não pôde ser concluído), nunca simular uma resposta de sucesso fabricada.

## Diferença em relação às outras camadas

- **`src/services`** — *como o site conversa com o mundo externo*. Chamadas de rede, contratos de integração, sem lógica de apresentação e sem validação de formulário (a validação é de `src/utils`).
- **`src/lib`** — *como o site funciona tecnicamente, internamente* (URL canônica, SEO). Não faz chamadas externas.
- **`src/utils`** — funções puras de transformação/validação, sem efeitos colaterais e sem I/O.

## Arquivos

- **`diagnosisSubmission.ts`**: função `submitDiagnosisRequest`, usada por `src/components/contact/DiagnosisForm.astro`. Atualmente **não há nenhum backend real conectado** — a função existe como ponto de integração único e documentado, mas sempre retorna um resultado indicando que o envio não pôde ser concluído, até que uma integração real seja definida e implementada aqui.

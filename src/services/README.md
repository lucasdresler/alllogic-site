# services

Diretório destinado à **camada de integração externa** do site — o ponto de contato entre o Atlas e serviços de fora do próprio projeto (ex.: envio de formulário para um backend, e-mail, CRM, webhook).

## Responsabilidade de `src/services`

`src/services` isola qualquer chamada a um serviço externo em uma função com um contrato estável (entrada tipada, saída tipada), para que componentes de apresentação nunca precisem saber *como* ou *para onde* um dado é enviado — apenas chamam a função e reagem ao resultado.

Esta camada foi criada para atender à necessidade real de envio de dados do formulário de diagnóstico. O envio é realizado pelo endpoint próprio `public/api/diagnosis.php`, que encaminha as mensagens ao e-mail institucional de contato (ver `docs/decisions/ADR-0003-camada-de-servicos-e-formulario-de-diagnostico.md`).

## Regra importante

Uma função em `src/services` **nunca finge sucesso quando não há integração real conectada**. A integração atual é real: `submitDiagnosisRequest` envia os dados para `public/api/diagnosis.php` e considera o envio bem-sucedido somente quando o endpoint responde com `ok: true`.

## Diferença em relação às outras camadas

- **`src/services`** — *como o site conversa com o mundo externo*. Chamadas de rede, contratos de integração, sem lógica de apresentação e sem validação de formulário (a validação é de `src/utils`).
- **`src/lib`** — *como o site funciona tecnicamente, internamente* (URL canônica, SEO). Não faz chamadas externas.
- **`src/utils`** — funções puras de transformação/validação, sem efeitos colaterais e sem I/O.

## Arquivos

- **`diagnosisSubmission.ts`**: função `submitDiagnosisRequest`, usada por `src/components/contact/DiagnosisForm.astro`. Realiza uma requisição `POST` para o endpoint próprio `/api/diagnosis.php`, enviando os dados do formulário em JSON e tratando a resposta da integração.

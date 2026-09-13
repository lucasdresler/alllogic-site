# ADR-0004: Domínio oficial do site institucional

## Status

Homologada

## Contexto

O Projeto Atlas possui registros históricos que associam a primeira versão pública do site ao domínio `alllogic.com.br`. Essa definição foi registrada no ADR-0002 e também consta na homologação histórica de publicação registrada em 31/08/2026.

A definição atual do responsável pelo projeto estabelece `alllogiconline.com.br` como o domínio oficial do site institucional da AllLogic.

A infraestrutura atual atende `alllogiconline.com.br` e `www.alllogiconline.com.br`, ambos acessíveis publicamente. O site publicado utiliza `https://alllogiconline.com.br/` como URL canônica.

## Problema

Manter `alllogic.com.br` como definição vigente nos documentos arquiteturais cria conflito entre a documentação histórica e a configuração atual do site. É necessário registrar formalmente a definição atual sem apagar ou reescrever os registros históricos.

## Decisão

O domínio oficial do site institucional da AllLogic, no estado atual do Projeto Atlas, é `alllogiconline.com.br`.

A URL canônica da publicação institucional é `https://alllogiconline.com.br/`.

`www.alllogiconline.com.br` é uma variante pública do domínio e pode permanecer acessível, mas não substitui o domínio canônico.

As referências ao domínio público do site devem utilizar `alllogiconline.com.br`, salvo quando estiverem documentando explicitamente um registro histórico.

O endereço institucional de e-mail `contato@alllogiconline.com.br` permanece inalterado. A definição do domínio público não implica alteração do endereço de e-mail.

## Relação com ADR-0002

O ADR-0002 permanece versionado para preservar o histórico das decisões do Projeto Atlas, mas sua definição de domínio para a primeira versão pública tornou-se obsoleta diante desta decisão posterior.

Nenhum registro histórico de homologação deve ser reescrito para aparentar que utilizou o domínio atualmente definido.

## Consequências

- O código e os metadados públicos do site devem utilizar `alllogiconline.com.br` como domínio institucional.
- Novas homologações de publicação devem utilizar o domínio atualmente definido.
- Documentos históricos que mencionem `alllogic.com.br` devem ser preservados quando representarem fielmente uma decisão ou validação realizada anteriormente.
- Referências atuais ao domínio público devem ser alinhadas progressivamente a esta ADR.

## Validação

Em 13/09/2026, foram verificadas as seguintes URLs em produção:

- `https://alllogiconline.com.br/` — HTTP 200.
- `https://www.alllogiconline.com.br/` — HTTP 200.
- O HTML publicado em `alllogiconline.com.br` apresenta canonical para `https://alllogiconline.com.br/`.
- O HTML publicado em `alllogiconline.com.br` apresenta `og:url` para `https://alllogiconline.com.br/`.

## Referências

- `docs/decisions/ADR-0002-escopo-de-internacionalizacao.md` — decisão histórica sobre o escopo da primeira versão.
- `docs/MOA/homologacoes/publicacao-site-alllogic.md` — homologação histórica de publicação.
- `src/lib/site.config.ts` — configuração atual da URL institucional.
- `AGENTS.md` — parâmetros e regras específicos de infraestrutura do Projeto Atlas.

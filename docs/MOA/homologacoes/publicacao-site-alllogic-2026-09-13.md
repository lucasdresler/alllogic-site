# Homologação de Publicação — Site Institucional AllLogic

## Status

**Homologado**

## Data

13/09/2026

## Projeto

Projeto Atlas — Site Institucional AllLogic

## Objetivo

Registrar a homologação técnica da publicação atual do site institucional da AllLogic no domínio oficial `alllogiconline.com.br`, incluindo build, artefatos gerados, rotas públicas, SEO, integração do formulário de diagnóstico e respostas do endpoint publicado.

## Ambiente homologado

- Domínio oficial: `alllogiconline.com.br`
- Estratégia: geração estática com Astro
- Diretório de build: `dist/`
- Publicação atual: ambiente de produção homologado do Projeto Atlas
- Endpoint dinâmico: `api/diagnosis.php`

## Processo de homologação

### 1. Build

Executado:

`npm run build`

Resultado: **Aprovado**

O build estático foi concluído com sucesso.

Foram geradas 5 páginas:

- `/`
- `/sobre/`
- `/contato/`
- `/dominios-e-hospedagem/`
- `/politica-de-privacidade/`

Também foram gerados os arquivos de sitemap.

### 2. Artefatos

Foram validados no diretório `dist/`:

- páginas HTML das 5 rotas;
- `sitemap-index.xml`;
- `sitemap-0.xml`;
- `api/diagnosis.php`;
- favicon;
- logotipo institucional;
- imagem Open Graph;
- imagens dos projetos do portfólio;
- arquivos CSS gerados pelo Astro.

Resultado: **Aprovado**

### 3. Páginas públicas

Foram realizadas requisições HTTPS às páginas principais.

Resultados observados:

- raiz `/`: HTTP 200;
- `/contato/`: HTTP 200.

As URLs finais permaneceram no domínio oficial `https://alllogiconline.com.br/`.

Resultado: **Aprovado**

### 4. SEO e metadados

As 5 páginas HTML foram verificadas quanto a:

- `lang="pt-BR"`;
- URL canônica;
- `og:url`;
- `og:image`;
- dados estruturados `Organization`;
- dados estruturados `WebSite`.

As referências verificadas utilizam o domínio oficial atual.

Resultado: **Aprovado**

A definição do domínio oficial está registrada no ADR-0004.

### 5. Formulário de diagnóstico

A página `/contato/` foi verificada quanto à presença da integração com:

`/api/diagnosis.php`

Também foram identificados os campos:

- `company`;
- `contactName`;
- `phone`;
- `message`.

Resultado: **Aprovado**

### 6. Endpoint de diagnóstico

Foram realizados testes negativos diretamente no endpoint publicado, sem envio de diagnóstico real.

#### GET

Resultado esperado:

`HTTP 405`

Resultado observado: **HTTP 405**

#### POST com JSON inválido

Resultado esperado:

`HTTP 400`

Resultado observado: **HTTP 400**

#### POST com campos obrigatórios vazios

Resultado esperado:

`HTTP 422`

Resultado observado: **HTTP 422**

Resultado geral: **Aprovado**

Nenhum diagnóstico real foi enviado durante a homologação.

### 7. Validação local do PHP

A tentativa de executar `php -l` localmente não foi realizada com sucesso porque o ambiente local não possui o comando `php` instalado.

Não foi instalado PHP CLI no ambiente local apenas para esta validação.

A execução real do endpoint publicado respondeu corretamente aos testes negativos descritos nesta homologação.

## Limitações e observações

- A validação local de sintaxe PHP com `php -l` não foi executada devido à ausência do PHP CLI no ambiente local.
- O endpoint PHP publicado foi validado diretamente em produção por meio de requisições HTTP.
- Não foi realizado envio de diagnóstico real.
- O arquivo histórico `publicacao-site-alllogic.md` foi preservado sem alteração por representar uma homologação anterior.

## Conclusão

A publicação atual do site institucional do Projeto Atlas foi tecnicamente homologada.

O build estático, os artefatos, as páginas públicas, os metadados, a integração do formulário e os comportamentos negativos do endpoint publicado apresentaram os resultados esperados dentro do escopo desta homologação.

**Status final: Homologado.**

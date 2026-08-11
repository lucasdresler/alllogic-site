# Arquitetura do Projeto Atlas

## Objetivo

Estabelecer a direção arquitetural do Projeto Atlas para que o site institucional da AllLogic evolua com clareza, qualidade e foco nas pessoas.

## Princípios Arquiteturais

- Pessoas em primeiro lugar.
- Desempenho por padrão.
- Arquitetura antes da implementação.
- Manutenibilidade e responsabilidades bem definidas.
- Acessibilidade e semântica.
- Evolução segura, com decisões rastreáveis.
- Separação estrita entre conteúdo, configuração técnica, apresentação e roteamento.
- Nenhuma camada concentra mais de uma responsabilidade arquitetural.

## Stack

O projeto utiliza Astro, TypeScript e CSS moderno. Docker, Traefik, Cloudflare e Git compõem a direção definida para ambientes, publicação e colaboração. As responsabilidades de cada tecnologia estão apresentadas no [README principal](../README.md#stack).

## Organização do Projeto

O Atlas adota geração estática como estratégia principal. Interatividade no navegador será utilizada de forma seletiva, quando agregar valor claro à experiência.

## Camadas da Arquitetura (estado atual)

O código-fonte em `src/` está organizado nas seguintes camadas, cada uma com responsabilidade única:

- **`src/pages`** — pontos de entrada de rota (roteamento baseado em arquivos do Astro). Compõe um layout com os componentes de conteúdo correspondentes à rota. Não define estrutura de documento nem conteúdo textual próprio.
- **`src/layouts`** — estrutura de documento compartilhada entre páginas (HTML, metatags, composição de `Header`/`Footer` ao redor de um `<slot />`). Não define conteúdo textual próprio nem regras de negócio.
- **`src/components`** — apresentação: markup e composição visual, organizada em `layout/` (componentes estruturais genéricos: `Container`, `Section`, `Grid`), `navigation/` (`Header`, `Navigation`, `Footer`) e `sections/` (componentes de conteúdo específicos da Home). Não define conteúdo textual próprio nem parâmetros técnicos.
- **`src/content`** — conteúdo institucional e editorial (textos, identidade da marca, navegação), organizado em `foundation.ts` (preparação para integração futura com o `FOUNDATION.md` do `alllogic-sga`), `site.ts` (identidade institucional compartilhada), `home.ts` (narrativa da Home) e `navigation.ts` (itens de navegação). Não define markup nem parâmetros técnicos.
- **`src/lib`** — configuração técnica do site (`site.config.ts`: URL canônica e metadados técnicos de SEO). Não define conteúdo institucional nem markup.
- **`src/types`** — contratos de tipo TypeScript compartilhados entre camadas (hoje, `NavigationItem`). Não contém valores nem lógica.
- **`src/utils`** — funções utilitárias puras e sem estado (formatação, validação, transformação de dados). Diretório preparado na estrutura, ainda sem nenhuma função implementada.
- **`src/styles`** — arquitetura de estilos globais (tokens, reset, layout, tipografia, utilidades), agregada em `index.css` e importada pelo `MainLayout`.
- **`public/`** — ativos estáticos públicos, atualmente os favicons do site. O Astro os copia diretamente para a saída do build e os disponibiliza por URL pública; não contém lógica, código-fonte ou recursos processados pela cadeia de ativos de `src/`.

## Fluxo de Dependências

Cada arquivo depende apenas de camadas iguais ou "abaixo" dele no fluxo — nunca o inverso:

```
pages
  ↓ depende de
layouts
  ↓ depende de
components
  ↓ depende de
content
  ↓ depende de (parcialmente)
lib

content, components e lib podem depender de:
types

Qualquer camada pode depender de:
utils (quando houver funções implementadas)
```

`public/` não participa desse fluxo de dependências: seus ativos estáticos não são importados pelas camadas de `src/` e são copiados diretamente pelo Astro durante o build. Recursos que fazem parte da implementação e precisam ser importados ou processados pertencem a `src/assets/`, não a `public/`.

Fluxo por exemplo concreto já implementado no projeto:

```
src/pages/index.astro
        ↓
src/layouts/MainLayout.astro
        ↓
src/components/navigation/{Header,Footer}.astro
src/components/sections/*.astro
        ↓
src/content/{home,site,navigation}.ts
        ↓
src/types/navigation.ts
```

`src/lib/site.config.ts` hoje não é consumido por nenhum arquivo do projeto (documentado como responsabilidade técnica reservada, sem integração ativa ainda).

## Regra de Dependências (quem pode depender de quem)

- `pages` pode depender de: `layouts`, `components`, `content`, `types`, `utils`.
- `layouts` pode depender de: `components`, `content`, `lib`, `types`, `utils`, `styles`.
- `components` pode depender de: `content`, `types`, `utils` (e de outros `components`, dentro da mesma camada).
- `content` pode depender de: outros arquivos de `content` (ex.: `home.ts` depende de `site.ts`), `types`, `utils`.
- `lib` pode depender de: `types`, `utils`.
- `types` não depende de nenhuma outra camada.
- `utils` não depende de nenhuma outra camada.

Nenhuma camada "abaixo" (`content`, `lib`, `types`, `utils`) importa de uma camada "acima" (`components`, `layouts`, `pages`) — essa é a regra estrutural que impede acoplamento circular entre conteúdo/configuração e apresentação/roteamento.

## Diagrama Textual da Arquitetura

```
┌─────────────────────────────────────────────┐
│                  src/pages                   │
│              (index.astro)                   │
└───────────────────┬───────────────────────────┘
                    │
┌───────────────────▼───────────────────────────┐
│                 src/layouts                   │
│              (MainLayout.astro)               │
└───────────────────┬───────────────────────────┘
                    │
┌───────────────────▼───────────────────────────┐
│               src/components                 │
│   layout/   navigation/   sections/           │
└───────────────────┬───────────────────────────┘
                    │
┌───────────────────▼───────────────────────────┐
│                src/content                    │
│  foundation.ts  site.ts  home.ts  navigation.ts│
└───────────────────┬───────────────────────────┘
                    │
       ┌────────────┴────────────┐
       ▼                         ▼
┌─────────────┐           ┌─────────────┐
│  src/types  │           │  src/utils  │
└─────────────┘           └─────────────┘

src/lib (site.config.ts) — configuração técnica,
consumida potencialmente por layouts/pages,
sem consumidor ativo no estado atual.

src/styles — estilos globais, importados pelo layout.

public/ — ativos estáticos públicos, copiados diretamente para o build;
não contém código-fonte nem lógica.
```

## Separação de Responsabilidades

- Conteúdo (`src/content`): informações institucionais e editoriais estruturadas, sem markup.
- Configuração técnica (`src/lib`): parâmetros de infraestrutura e SEO, sem conteúdo institucional.
- Tipos (`src/types`): contratos de forma de dado compartilhados, sem valores.
- Utilitários (`src/utils`): transformação pura de dados, sem apresentação nem conteúdo.
- Componentes de interface (`src/components`): elementos de apresentação reutilizáveis e acessíveis, sem conteúdo textual próprio.
- Páginas e layouts (`src/pages`, `src/layouts`): composição das rotas e da estrutura de documento, sem regras de negócio nem conteúdo próprio.
- Estilos e tokens de design (`src/styles`): fundamentos visuais centralizados.
- Ativos públicos (`public/`): arquivos estáticos entregues diretamente pelo Astro, sem lógica, código-fonte ou processamento de ativos de `src/`.
- Infraestrutura e publicação: configuração versionada e documentada (Docker, Traefik, Cloudflare, Git).

## Evolução da Arquitetura

As definições arquiteturais serão amadurecidas conforme o projeto evoluir. Decisões relevantes deverão ser registradas como ADRs no diretório [decisions/](decisions/), após análise e aprovação no fluxo oficial da AllLogic.

## Referências

- [README principal](../README.md)
- [Fluxo de Desenvolvimento](MOA/fluxo-desenvolvimento.md)
- [Fluxo de Homologação Tecnológica](MOA/fluxo-homologacao.md)
- [Homologação do Astro 7.1.6](MOA/homologacoes/astro-7.1.6.md)
- READMEs de cada camada: `src/content/README.md`, `src/lib/README.md`, `src/types/README.md`, `src/utils/README.md`, `src/components/README.md`, `src/layouts/README.md`, `src/pages/README.md`.

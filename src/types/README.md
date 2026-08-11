# types

Diretório destinado às definições de tipos TypeScript **compartilhadas** entre diferentes partes do projeto — usadas por mais de um consumidor (componente, arquivo de conteúdo ou configuração técnica).

## Responsabilidade de `src/types`

`src/types` define a **forma** dos dados que atravessam camadas diferentes da arquitetura (ex.: um tipo usado tanto por um arquivo em `src/content` quanto pelo componente Astro que o consome). Não contém valores nem lógica — apenas contratos de tipo (`interface`, `type`).

## Diferença entre tipos compartilhados e modelos de conteúdo

- **Tipo compartilhado (`src/types`)** — descreve a *estrutura* de um dado (quais campos existem e de que tipo são), sem se importar com o conteúdo em si. Existe para ser reutilizado por múltiplos arquivos que não têm relação hierárquica entre si (ex.: um componente de apresentação e uma fonte de dados).
- **Modelo de conteúdo (`src/content`)** — combina a estrutura (que pode vir de `src/types` ou ser definida localmente) com os *valores* reais (ou placeholders) daquele domínio específico. `HomeContent`, `SiteContent` e `FoundationContent`, por exemplo, são modelos de conteúdo: têm forma e dados, e vivem apenas em seus respectivos arquivos.

Em resumo: `src/types` responde "qual é o formato?"; `src/content` responde "qual é o formato e qual é o valor, para este domínio específico?".

## Quando criar um novo tipo em `src/types`

Criar um tipo em `src/types` quando ele for consumido por **mais de um arquivo em camadas diferentes** — por exemplo, um tipo usado simultaneamente por um arquivo de conteúdo (`src/content`) e pelo componente Astro que o renderiza, ou por dois arquivos de conteúdo distintos sem relação de importação entre si.

## Quando um tipo deve permanecer local ao arquivo

Manter o tipo local (definido com `interface`/`type` no próprio arquivo, como `HomeContent`, `SiteContent`, `FoundationContent`, `NavigationContent`, `SiteConfig`) quando ele descreve a estrutura de um único objeto de conteúdo ou configuração, consumido apenas através da instância exportada daquele arquivo (ex.: `homeContent`), sem necessidade de ser referenciado por tipo em nenhum outro lugar do projeto.

## `navigation.ts` como exemplo de tipo compartilhado

`src/types/navigation.ts` define `NavigationItem` (`{ label: string; href: string }`) — a forma de um item de navegação. Esse tipo é reutilizado em múltiplos pontos sem relação hierárquica direta entre si:

- `src/content/navigation.ts`, para tipar os arrays `main` e `footer` de `NavigationContent`;
- `src/components/navigation/Navigation.astro`, indiretamente, através do tipo dos itens consumidos de `navigationContent.main`.

Por representar uma estrutura de dado reaproveitada por mais de uma camada da arquitetura, `NavigationItem` é o exemplo correto de quando um tipo pertence a `src/types` em vez de ser definido localmente em um único arquivo.

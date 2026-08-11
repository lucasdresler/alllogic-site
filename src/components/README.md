# components

Diretório destinado aos componentes Astro de apresentação do site — a camada que renderiza markup a partir dos dados de `src/content` e da configuração de `src/lib`.

## Responsabilidade de `src/components`

`src/components` define **como** o site é exibido: estrutura HTML, composição visual e organização das peças reutilizáveis da interface. Componentes não definem conteúdo próprio (texto institucional ou editorial) — eles recebem dados via Props ou consomem diretamente `src/content`, e não definem parâmetros técnicos — esses vêm de `src/lib`.

## Organização atual

```
components/
├── layout/
├── navigation/
└── sections/
```

### `layout/`

Componentes estruturais e genéricos, sem conhecimento de domínio ou de conteúdo institucional: `Container`, `Section`, `Grid`. Controlam apenas layout (largura, espaçamento, malha), reutilizáveis em qualquer contexto do site, independentemente do que está sendo exibido dentro deles.

### `navigation/`

Componentes responsáveis pela navegação e pelo envelope estrutural comum a todas as páginas: `Header`, `Navigation`, `Footer`. Conhecem a fonte de conteúdo de navegação (`navigationContent`, de `src/content/navigation.ts`), mas não conhecem o conteúdo específico de nenhuma página.

### `sections/`

Componentes de conteúdo específicos da página inicial: `HeroSection`, `ProblemsSection`, `MethodSection`, `DiagnosisSection`, `SolutionsSection`, `PortfolioSection`, `CTASection`. Cada um consome sua fatia correspondente de `homeContent` (`src/content/home.ts`) e compõe os componentes de `layout/` para se estruturar internamente.

## Diferença entre componentes estruturais, de navegação e de conteúdo

- **Estruturais (`layout/`)** — não sabem o que está sendo exibido; fornecem apenas a "moldura" (largura, espaçamento, grid). Reutilizáveis em qualquer página ou seção, sem relação com nenhum domínio de conteúdo.
- **De navegação (`navigation/`)** — sabem que existe navegação e onde ela fica na página, mas não sabem qual é o conteúdo de cada página; são compartilhados por todo o site através do `MainLayout`.
- **De conteúdo (`sections/`)** — sabem exatamente qual conteúdo exibem e de onde ele vem (`homeContent`); são específicos de uma página (hoje, a Home) e não são pensados para reuso em outro contexto sem adaptação.

## Critérios para criação de novos componentes

Criar um novo componente quando:
- Uma peça de markup se repete (ou é razoável prever que se repetirá) em mais de um lugar; ou
- Uma seção da página tem responsabilidade e conteúdo próprios o suficiente para merecer isolamento (como já ocorre com cada seção da Home); ou
- Separar a peça melhora a legibilidade do arquivo que a contém, mesmo sem reuso imediato.

Antes de criar, verificar se um componente existente em `layout/` já resolve a necessidade estrutural — a estrutura só deve ser reimplementada quando `Container`, `Section` ou `Grid` genuinamente não atenderem ao caso.

## Quando reutilizar vs. quando manter específico de uma página

- **Reutilizar** um componente (ou movê-lo para `layout/` ou `navigation/`) quando ele não carrega nenhum conhecimento sobre conteúdo específico de uma página — apenas estrutura ou navegação compartilhada por todo o site.
- **Manter específico de uma página** (como os componentes de `sections/` hoje) quando o componente está diretamente acoplado ao conteúdo e à ordem de uma jornada particular (ex.: a Home) — forçar reuso nesse caso tende a introduzir Props desnecessárias só para generalizar algo que, na prática, só é usado em um lugar.

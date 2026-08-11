# content

Diretório destinado ao conteúdo estruturado do site (dados de texto e navegação consumidos pelas páginas e componentes), separado da lógica de apresentação e da configuração técnica (`src/lib/`).

## Responsabilidade de cada arquivo

### `foundation.ts`

Estrutura preparatória para receber, futuramente, a tradução do `FOUNDATION.md` homologado do repositório `alllogic-sga` (propósito, missão, visão, valores e manifesto). É o ponto de entrada institucional mais próximo da fonte primária da AllLogic. Hoje contém apenas placeholders — nenhuma integração real com o `alllogic-sga` foi implementada ainda.

**Fonte de dados futura:** `FOUNDATION.md` (repositório `alllogic-sga`), após homologação.

### `site.ts`

Conteúdo institucional compartilhado entre múltiplas páginas do site — identidade da empresa (nome, propósito, missão, visão, descrição), tagline de marca, contato e redes sociais. Representa a tradução do conteúdo institucional para o contexto de comunicação pública do site.

**Fonte de dados futura:** `foundation.ts`, uma vez que este esteja integrado ao `FOUNDATION.md` homologado.

### `home.ts`

Conteúdo textual específico da página inicial (Hero, Problems, Method, Diagnosis, Solutions, Portfolio, CTA final) — títulos, descrições e CTAs de cada seção da jornada do visitante. Reutiliza `site.ts` sempre que um campo representa informação institucional compartilhada (ex.: `hero.title` reutiliza `site.ts` → `branding.tagline`), evitando duplicar a mesma informação em dois lugares.

**Fonte de dados futura:** `site.ts`, para os campos institucionais compartilhados; conteúdo editorial próprio da Home para os demais campos.

### `navigation.ts`

Fonte única dos itens de navegação do site — menu principal (`main`) e menu do rodapé (`footer`). Consumido diretamente por `Navigation.astro` e `Footer.astro`.

**Fonte de dados futura:** arquitetura de navegação do site, a homologar separadamente.

## Fluxo oficial de conteúdo

```
FOUNDATION.md (alllogic-sga)
        ↓
foundation.ts
        ↓
site.ts
        ↓
home.ts
        ↓
Componentes Astro
```

Cada camada consome apenas a camada imediatamente anterior, evitando que componentes Astro leiam diretamente do `FOUNDATION.md` ou pulem etapas da tradução institucional. `navigation.ts` segue um fluxo paralelo e independente, já que seu conteúdo (itens de menu) não deriva do `FOUNDATION.md`.

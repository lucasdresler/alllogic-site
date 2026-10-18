# content

Diretório destinado ao conteúdo estruturado do site (dados de texto e navegação consumidos pelas páginas e componentes), separado da lógica de apresentação e da configuração técnica (`src/lib/`).

## Responsabilidade de cada arquivo

### `foundation.ts`

Tradução literal do `FOUNDATION.md` homologado do repositório `alllogic-sga` (propósito, missão, visão e valores). É o ponto de entrada institucional mais próximo da fonte primária da AllLogic, já integrado e consumido por `site.ts`. O campo `company.manifesto` permanece como placeholder porque sua fonte oficial (`01-Fundacao/manifesto.md`, `alllogic-sga`) ainda não possui conteúdo homologado.

**Fonte de dados:** `FOUNDATION.md` (repositório `alllogic-sga`), já homologado e integrado.

### `site.ts`

Conteúdo institucional compartilhado entre múltiplas páginas do site — identidade da empresa (nome, propósito, missão, visão, descrição), tagline de marca, contato e redes sociais. Representa a tradução do conteúdo institucional para o contexto de comunicação pública do site. Os campos `purpose`, `mission` e `vision` já consomem `foundation.ts`; os demais campos (`company.name`, `company.description`, `branding.tagline`, `contact`, `social`) permanecem placeholders até homologação própria.

**Fonte de dados:** `foundation.ts`, já integrado para os campos institucionais compartilhados.

### `home.ts`

Conteúdo textual específico da página inicial (Hero, Problems, Method, Diagnosis, Solutions, Portfolio, CTA final) — títulos, descrições e ações (`actions: HomeCTA[]`) de cada seção da jornada do visitante. Reutiliza `site.ts` sempre que um campo representa informação institucional compartilhada.

### `sobre.ts`

Conteúdo textual estruturado da página `/sobre/` (Hero, Quem Somos, Nossa Forma de Pensar, Mentalidade de Engenharia, Tecnologia para as Pessoas, Experiência Prática, Como Trabalhamos e Encerramento). Reutiliza `site.ts` e `home.ts` para dados institucionais compartilhados.

### `contato.ts`

Conteúdo da página `/contato/` e textos do formulário de diagnóstico.

### `agillex.ts`

Conteúdo comercial da solução Agillex Agenda (Hero, Público-alvo, Recursos, Planos e Experimentação).

### `agillex-hub.ts`

Conteúdo comercial da plataforma Agillex Hub (Hero, Pilares operacionais, Sticky Showcase, Multi-tenant, Tabela comparativa de planos e Checkout).

### `agillex-atendimento.ts`

Conteúdo comercial da solução Agillex Atendimento (Hero, Atendimento Humanizado com IA, Casos de uso, Recursos, Tabela de planos e Checkout).

### `navigation.ts`

Fonte única dos itens de navegação do site — menu principal (`main`, incluindo dropdowns como "Família Agillex") e menu do rodapé (`footer`). Consumido diretamente por `Header.astro`, `Navigation.astro` e `Footer.astro`.

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

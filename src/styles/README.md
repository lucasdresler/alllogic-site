# styles

Diretório destinado à arquitetura de estilos globais do Projeto Atlas. Esta camada centraliza os fundamentos visuais compartilhados pelo site — tokens, normalização, padrões de layout, tipografia e utilitários — sem concentrar estilos exclusivos de componentes.

## Responsabilidade de `src/styles`

`src/styles` é a fonte única de verdade para estilos globais e reutilizáveis entre páginas e componentes. Seus arquivos são agregados por `index.css`, importado uma única vez por `src/layouts/MainLayout.astro`.

Esta camada define fundamentos, não a apresentação particular de uma seção ou componente. Valores de identidade visual ainda não homologados devem permanecer como placeholders até sua aprovação no Design System.

## Responsabilidade de cada arquivo

### `tokens.css`

Define as *custom properties* globais (`:root`) do projeto: cores, espaçamentos e raios de borda. É o ponto central para valores reutilizados pelos demais estilos e, por isso, não deve conter regras de componentes.

### `base.css`

Aplica o reset e a normalização mínima compartilhada: `box-sizing`, remoção de margens e preenchimentos padrão, comportamento básico de imagens e base do `body`. Não define a identidade visual definitiva.

### `layout.css`

Fornece padrões genéricos de composição e espaçamento reutilizáveis, como `.flow`, `.stack` e `.cluster`. Essas classes dependem dos tokens de espaçamento e não representam a estrutura particular de nenhum componente.

### `typography.css`

Define a tipografia global básica: altura de linha e tamanhos relativos para títulos, parágrafos e texto auxiliar. A família tipográfica base vem de `base.css`; decisões de tipografia de marca dependem da homologação do Design System.

### `utilities.css`

Reúne utilitários globais, pequenos e pontuais, incluindo classes de acessibilidade (`.visually-hidden` e `.sr-only`) e alinhamento de texto (`.text-center`). Um utilitário deve ser genérico, reutilizável e não carregar conhecimento de um componente específico.

### `index.css`

É o ponto de entrada dos estilos globais. Ele agrega os arquivos desta camada e deve ser importado pelo layout principal, não repetidamente por páginas ou componentes.

## Ordem correta de importação

`index.css` deve importar os estilos nesta ordem:

```css
@import "./tokens.css";
@import "./base.css";
@import "./layout.css";
@import "./typography.css";
@import "./utilities.css";
```

1. `tokens.css` vem primeiro para disponibilizar as variáveis globais.
2. `base.css` estabelece a normalização sobre a qual o restante do site é construído.
3. `layout.css` aplica padrões compartilhados de composição que usam os tokens.
4. `typography.css` estabelece a escala tipográfica global.
5. `utilities.css` vem por último para disponibilizar utilitários explícitos e pontuais.

Não altere essa ordem sem necessidade arquitetural documentada, pois ela define a cascata dos fundamentos globais.

## Estilos globais e estilos de componentes

- **Estilos globais** pertencem a `src/styles`: tokens, reset, tipografia base, padrões genéricos de layout e utilitários que podem servir a todo o site.
- **Estilos específicos de componentes** pertencem ao mesmo diretório do componente em `src/components`: regras que descrevem somente sua estrutura, variações, estados ou aparência própria.

Cada componente deve importar apenas seu próprio arquivo CSS local, como `./header.css` ou `./hero-section.css`. Um componente não deve importar `src/styles/index.css`; o `MainLayout` já torna os estilos globais disponíveis para as páginas que compõe.

Quando uma regra deixar de ser específica e passar a atender múltiplos consumidores sem conhecimento de domínio, ela pode pertencer a `src/styles`, desde que não duplique uma regra ou utilitário já existente. Caso contrário, ela deve permanecer junto do componente responsável.

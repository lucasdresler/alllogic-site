# Design System do Projeto Atlas

Este documento registra os fundamentos do Design System homologado do Projeto Atlas — implementados em `src/styles/tokens.css` e consumidos pelos componentes de `src/components/`.

## Identidade Visual

Direção visual homologada: tecnologia, engenharia, confiança, clareza, profissionalismo e modernidade — sem gradientes, sombras ou animações excessivas.

## Paleta

| Token | Valor | Uso |
| --- | --- | --- |
| `--color-primary` | `#0A1F44` (azul-marinho profundo) | Texto principal, background de seções de destaque (`section--dark`), rodapé. |
| `--color-primary-dark` | `#061530` | Texto sobre fundo dourado (CTA de destaque). |
| `--color-secondary` | `#1F6FFF` (azul elétrico) | Links, CTA primário, estados de foco/hover, eyebrow do Hero. |
| `--color-accent` | `#C9A227` (dourado) | CTA de maior destaque (Diagnóstico, CTA final), numeração do Método. |
| `--color-background` | `#FFFFFF` | Fundo padrão (`section--default`). |
| `--color-surface` | `#F4F6FA` | Fundo levemente destacado (`section--light`). |
| `--color-text` | `#0A1F44` | Texto padrão sobre fundo claro. |
| `--color-text-muted` | `#4A5568` | Texto secundário (descrições). |
| `--color-text-inverse` | `#FFFFFF` | Texto sobre fundo escuro (`section--dark`). |
| `--color-border` | `#DDE3EE` | Bordas sutis (cards, header, CTA secundário). |
| `--color-error` | `#B3261E` | Feedback de erro (validação de campos, status de envio falho). |
| `--color-success` | `#1E8E3E` | Feedback de sucesso (status de envio bem-sucedido). |

## Tipografia

Definida em `src/styles/typography.css`: escala relativa (`h1` 2.5rem → `h6` 1rem, `line-height` 1.2 para títulos e 1.5 para o corpo). Família tipográfica ainda herda de `system-ui` (`src/styles/base.css`); a adoção de uma fonte de marca própria permanece como decisão futura, não incluída nesta homologação.

## Grid

Componente `Grid` (`src/components/layout/Grid.astro`) com 1 a 4 colunas, responsivo (colapsa para 1 coluna em telas ≤ 640px).

## Espaçamento

| Token | Valor |
| --- | --- |
| `--space-xs` | `0.5rem` |
| `--space-sm` | `1rem` |
| `--space-md` | `1.5rem` |
| `--space-lg` | `2.5rem` |
| `--space-xl` | `4rem` |

## Bordas

| Token | Valor |
| --- | --- |
| `--radius-sm` | `4px` |
| `--radius-md` | `8px` |
| `--radius-lg` | `16px` |

## Sombras

`--shadow-sm`: `0 1px 2px rgba(10, 31, 68, 0.08)` — uso pontual (ex.: cards do Portfólio), evitando excesso de profundidade.

## Componentes

Botões/CTAs seguem duas variações, aplicadas localmente em cada seção (`hero-section.css`, `diagnosis-section.css`, `cta-section.css`):
- **Primário** (`--color-secondary`, texto invertido): ação principal do Hero.
- **Secundário** (contorno com `--color-border`, texto `--color-primary`): ação de apoio do Hero.
- **Destaque** (`--color-accent`, texto `--color-primary-dark`): CTA de Diagnóstico e CTA final, sobre fundo escuro.

## Ícones

Nenhum sistema de ícones foi adotado nesta homologação. Pendente de decisão futura (ex.: biblioteca de ícones SVG), sem necessidade comprovada até o momento.

## Acessibilidade

- Contraste: `--color-text` (`#0A1F44`) sobre `--color-background` (`#FFFFFF`) e `--color-text-inverse` (`#FFFFFF`) sobre `--color-primary` (`#0A1F44`) atendem a AA para texto normal.
- Foco visível padronizado (`outline: 2px solid var(--color-secondary)` ou `--color-text-inverse` sobre fundo escuro) em links de navegação e CTAs.
- `prefers-reduced-motion` respeitado globalmente em `src/styles/base.css`.

## Responsividade

Breakpoints de referência documentados em `--breakpoint-sm` (640px), `--breakpoint-md` (768px) e `--breakpoint-lg` (1024px) — usados diretamente nas media queries de `Grid` e `Footer`. Ainda não há um menu de navegação dedicado para mobile (ver pendências no relatório de implementação mais recente).

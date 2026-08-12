# Arquitetura de Conteúdo

## Objetivo

Este documento governa a organização e a estratégia de conteúdo do site institucional da AllLogic.

## Relação com o FOUNDATION.md

O `FOUNDATION.md` (repositório `alllogic-sga`) define a identidade institucional da AllLogic. Este documento traduz essa identidade para a comunicação pública do site, sem substituí-la nem duplicá-la.

## Princípios da Comunicação

<!-- TODO: princípios de comunicação a definir -->

## Público-alvo

<!-- TODO: público-alvo a definir -->

## Jornada do Visitante

1. Chegada
2. Problema
3. Método
4. Diagnóstico
5. Soluções
6. Portfólio
7. Contato

<!-- TODO: desenvolvimento textual de cada etapa -->

## Arquitetura da Home

A estrutura editorial da Home está implementada em `src/content/home.ts` (contrato `HomeContent`) e consumida por sete seções Astro dedicadas, uma por etapa da jornada do visitante. Cada seção consome exclusivamente `homeContent`, sem conteúdo textual próprio hardcoded.

| Etapa da jornada | Seção em `home.ts` | Componente Astro | Estrutura de conteúdo |
| --- | --- | --- | --- |
| Chegada | `hero` | `HeroSection.astro` | `title`, `description`, `actions: HomeCTA[]` |
| Problema | `problems` | `ProblemsSection.astro` | `title`, `description`, `items: HomeProblem[]` |
| Método | `method` | `MethodSection.astro` | `title`, `description`, `steps: HomeMethodStep[]` |
| Diagnóstico | `diagnosis` | `DiagnosisSection.astro` | `title`, `description`, `actions: HomeCTA[]` |
| Soluções | `solutions` | `SolutionsSection.astro` | `title`, `description`, `items: HomeSolution[]` |
| Portfólio | `portfolio` | `PortfolioSection.astro` | `title`, `description`, `projects: HomePortfolioProject[]` |
| Contato (CTA final) | `cta` | `CTASection.astro` | `title`, `description`, `actions: HomeCTA[]` |

Chamadas para ação (CTAs) de todas as seções são expressas exclusivamente via `actions: HomeCTA[]` (`{ label, href }`), fonte única para rótulo e destino de cada CTA.

O campo `hero.title` reutiliza `siteContent.branding.tagline` em vez de duplicar conteúdo institucional. Os demais campos textuais (`description`, `title` das demais seções, itens de `problems`/`solutions`/`portfolio`, passos de `method`) permanecem como conteúdo editorial provisório da Home, ainda sem texto definitivo homologado.

<!-- TODO: objetivo, mensagem principal e mensagens secundárias de cada seção a definir com conteúdo editorial definitivo. -->

## Conteúdo Institucional

<!-- TODO: conteúdo institucional a definir -->

## Conteúdo Editorial

<!-- TODO: conteúdo editorial a definir -->

## Conteúdo Comercial

<!-- TODO: conteúdo comercial a definir -->

## Conteúdo ainda não homologado

<!-- TODO: conteúdo ainda não homologado a registrar -->

## Roadmap

<!-- TODO: roadmap deste documento -->

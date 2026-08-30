# Arquitetura de Conteúdo

## Idioma da primeira versão

A primeira versão pública do Atlas será somente em Português do Brasil. A arquitetura permanece preparada para uma futura internacionalização para Inglês e Espanhol, mas essa implementação fica adiada e não bloqueia a construção da primeira versão. Ver [ADR-0002](decisions/ADR-0002-escopo-de-internacionalizacao.md) para o registro completo dessa decisão e do que ela preserva arquiteturalmente.

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

O campo `hero.title` reutiliza `siteContent.branding.tagline` em vez de duplicar conteúdo institucional. O conteúdo textual definitivo das 7 seções da Home (títulos, descrições, itens de `problems`/`solutions`/`portfolio`, passos de `method` e CTAs) foi homologado e integrado em `src/content/home.ts`.

Pendências remanescentes de conteúdo:
- `portfolio.projects`: os três projetos próprios (Escola Sabatina Online, Cupido Adventista, Lojinha do Lucas) estão identificados corretamente como "Projeto próprio" (nunca como cliente), mas a descrição de cada um permanece neutra e genérica até que o conteúdo real de cada projeto seja verificado em seu respectivo repositório/contexto.
- `diagnosis.actions` aponta para `/contato`, implementada (ver seção "Página de Contato/Diagnóstico" abaixo). `cta.actions` aponta para `/sobre`, também implementada (ver seção "Página Sobre" abaixo).
- `siteContent.contact` e `siteContent.social` permanecem placeholders: nenhum dado real de contato ou rede social foi fornecido até o momento.

## Página de Contato/Diagnóstico (`/contato`)

Continuação funcional do bloco Diagnóstico da Home. Conteúdo implementado em `src/content/contato.ts` (contrato `ContatoContent`), consumido por três componentes em `src/components/contact/`: `ContactHeroSection` (Hero da página), `DiagnosisForm` (formulário) e `ContactClosingSection` (encerramento).

Campos do formulário: Empresa, Contato (nome do responsável), Tel/Whats, Mensagem — todos obrigatórios, com validação client-side (`src/utils/validation.ts`) e mensagens de erro em Português do Brasil, associadas a cada campo via `aria-describedby`.

**Envio pendente de integração real.** Não há backend, e-mail, webhook ou CRM configurado no projeto. O envio passa por `src/services/diagnosisSubmission.ts`, que hoje sempre retorna um resultado indicando que a mensagem não pôde ser enviada — o formulário nunca finge um envio bem-sucedido. Ver [ADR-0003](decisions/ADR-0003-camada-de-servicos-e-formulario-de-diagnostico.md) para o registro completo dessa decisão.

**Vínculo com Política de Privacidade:** a página de Política de Privacidade ainda não existe no projeto; por isso, o formulário traz apenas uma nota de consentimento neutra (`contatoContent.form.consentNote`), sem referenciar uma política que ainda não foi criada. Pendência registrada, sem conteúdo jurídico inventado.

## Página Sobre (`/sobre`)

Complementa a narrativa da Home explicando quem é a AllLogic, como pensa e como trabalha. Conteúdo implementado em `src/content/sobre.ts` (contrato `SobreContent`), consumido por oito componentes em `src/components/about/`: Hero, Quem Somos, Nossa Forma de Pensar, Mentalidade de Engenharia, Tecnologia para as Pessoas, Experiência Prática, Como Trabalhamos e Encerramento.

Duas fontes são reaproveitadas em vez de duplicadas: `experience.projects` vem de `homeContent.portfolio.projects` (os mesmos três projetos próprios do Portfólio da Home, com a mesma pendência de descrição neutra até verificação real) e `philosophy.principle` vem de `homeContent.portfolio.closing` ("Cada empresa tem seus próprios desafios e também suas soluções."). `peopleForTech.title` reaproveita `siteContent.branding.tagline`.

A seção "Como Trabalhamos" (Entender → Analisar → Projetar → Construir → Validar → Evoluir) é deliberadamente distinta da seção "Método" da Home (Entender → Planejar → Construir → Evoluir): a Home apresenta a jornada de forma objetiva, `/sobre` explica a filosofia por trás dela, com mais passos e foco em validação.

O encerramento da página conecta com `/contato` (CTA "Vamos conversar"), sem repetir o conteúdo da página de contato.

Nenhuma foto de equipe, cliente, depoimento, número ou resultado foi criado — a AllLogic ainda não possui clientes, e a página trata isso com naturalidade.

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

# Arquitetura de Conteúdo

## Idioma da primeira versão

A primeira versão pública do Atlas será somente em Português do Brasil. A arquitetura permanece preparada para uma futura internacionalização para Inglês e Espanhol, mas essa implementação fica adiada e não bloqueia a construção da primeira versão. Ver [ADR-0002](decisions/ADR-0002-escopo-de-internacionalizacao.md) para o registro completo dessa decisão e do que ela preserva arquiteturalmente.

## Objetivo

Este documento governa a organização e a estratégia de conteúdo do site institucional da AllLogic.

## Relação com o FOUNDATION.md

O `FOUNDATION.md` (repositório `alllogic-sga`) define a identidade institucional da AllLogic. Este documento traduz essa identidade para a comunicação pública do site, sem substituí-la nem duplicá-la.

## Princípios da Comunicação

A comunicação pública do site deve traduzir a identidade institucional da AllLogic sem criar novas promessas ou atributos não homologados. Como fonte institucional primária, o SGA Foundation estabelece honestidade, transparência, qualidade, compromisso com as pessoas, conhecimento compartilhado e aprendizado contínuo, além do princípio de que a tecnologia deve trabalhar para as pessoas.

Na comunicação do site, isso significa:

- comunicar com clareza e transparência;
- apresentar tecnologia como meio para solucionar problemas reais;
- evitar promessas, resultados, números ou capacidades que não possam ser sustentados;
- priorizar utilidade, funcionalidade, competência e confiança;
- manter coerência com a missão, visão, valores e código de ética da AllLogic;
- não criar conteúdo institucional por inferência quando não houver fonte primária aprovada.

A fonte institucional para esses princípios é o `SGA/FOUNDATION.md`.

## Público-alvo

O `SGA/FOUNDATION.md` não define um público-alvo comercial específico para a AllLogic. Portanto, a arquitetura de conteúdo da V1 não estabelece um segmento de mercado, porte de empresa ou perfil de cliente por inferência.

A comunicação deve permanecer ampla o suficiente para representar a proposta institucional da AllLogic até que um público-alvo comercial seja formalmente definido e homologado.

## Jornada do Visitante

A jornada editorial implementada na Home segue:

1. Chegada
2. Problema
3. Método
4. Diagnóstico
5. Soluções
6. Portfólio
7. Contato

A jornada já está materializada nas sete seções da Home descritas abaixo. O desenvolvimento textual da jornada não permanece como pendência separada.

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

**Integração real implementada.** O formulário utiliza `src/services/diagnosisSubmission.ts` como ponto único de envio e está conectado ao endpoint PHP `public/api/diagnosis.php`, responsável por receber, validar e encaminhar a solicitação ao endereço institucional `contato@alllogiconline.com.br`. O formulário somente apresenta sucesso após confirmação positiva do endpoint. Ver [ADR-0003](decisions/ADR-0003-camada-de-servicos-e-formulario-de-diagnostico.md) para o registro da decisão.

**Vínculo com Política de Privacidade:** a Política de Privacidade está implementada em `/politica-de-privacidade/`. O formulário e o mecanismo de consentimento devem permanecer coerentes com o conteúdo efetivamente tratado pelo site e com a versão vigente da política.

## Página Sobre (`/sobre`)

Complementa a narrativa da Home explicando quem é a AllLogic, como pensa e como trabalha. Conteúdo implementado em `src/content/sobre.ts` (contrato `SobreContent`), consumido por oito componentes em `src/components/about/`: Hero, Quem Somos, Nossa Forma de Pensar, Mentalidade de Engenharia, Tecnologia para as Pessoas, Experiência Prática, Como Trabalhamos e Encerramento.

Duas fontes são reaproveitadas em vez de duplicadas: `experience.projects` vem de `homeContent.portfolio.projects` (os mesmos três projetos próprios do Portfólio da Home, com a mesma pendência de descrição neutra até verificação real) e `philosophy.principle` vem de `homeContent.portfolio.closing` ("Cada empresa tem seus próprios desafios e também suas soluções."). `peopleForTech.title` reaproveita `siteContent.branding.tagline`.

A seção "Como Trabalhamos" (Entender → Analisar → Projetar → Construir → Validar → Evoluir) é deliberadamente distinta da seção "Método" da Home (Entender → Planejar → Construir → Evoluir): a Home apresenta a jornada de forma objetiva, `/sobre` explica a filosofia por trás dela, com mais passos e foco em validação.

O encerramento da página conecta com `/contato` (CTA "Vamos conversar"), sem repetir o conteúdo da página de contato.

Nenhuma foto de equipe, cliente, depoimento, número ou resultado foi criado — a AllLogic ainda não possui clientes, e a página trata isso com naturalidade.

## Conteúdo Institucional

O conteúdo institucional da V1 está distribuído principalmente entre a Home e a página `/sobre`, utilizando `src/content/site.ts`, `src/content/home.ts` e `src/content/sobre.ts`.

A identidade institucional, propósito, missão, visão e demais fundamentos devem permanecer subordinados ao `SGA/FOUNDATION.md`.

Não há, neste documento, conteúdo institucional adicional a criar por inferência.

## Conteúdo Editorial

Conteúdo editorial recorrente, como blog, notícias ou publicações, não faz parte do escopo atual da V1 do site institucional.

A inclusão de uma frente editorial deverá ser definida posteriormente, caso seja considerada estratégica.

## Conteúdo Comercial

A V1 já apresenta as áreas de solução da AllLogic na Home e conduz o visitante ao diagnóstico e contato.

Não devem ser adicionados preços, resultados, depoimentos, clientes ou outras afirmações comerciais sem conteúdo real e homologado.

## Conteúdo ainda não homologado

As pendências de conteúdo atualmente conhecidas são:

- descrições dos projetos do portfólio, que devem ser verificadas nos respectivos projetos antes de qualquer detalhamento adicional;
- definição dos perfis oficiais de redes sociais, atualmente ainda não informados;
- definição formal de público-alvo comercial, ainda não estabelecida no SGA Foundation.

## Roadmap

O roadmap geral do Projeto Atlas é mantido em [`docs/roadmap.md`](roadmap.md), evitando duplicação de planejamento neste documento.

Este documento deve permanecer focado na arquitetura, organização, fontes e regras de conteúdo do site.

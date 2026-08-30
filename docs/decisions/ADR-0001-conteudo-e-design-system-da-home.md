# ADR-0001: Conteúdo real da Home e Design System v1

## Status

Implementada

## Contexto

A Home do Projeto Atlas estava estruturalmente completa (7 seções, arquitetura de camadas íntegra), mas com 100% do conteúdo textual em placeholder e nenhum valor real de Design System (tokens declarados como `unset`). A AllLogic homologou o conteúdo institucional e editorial definitivo da Home e a direção visual (azul-marinho profundo, azul elétrico, dourado, branco), tornando possível substituir os placeholders por conteúdo real.

## Problema

Sem conteúdo e tokens reais, a Home não representava um site institucional real — apenas uma demonstração estrutural. Além disso, o CTA principal do Hero e o CTA de Diagnóstico precisavam de destinos (`href`), mas as páginas institucionais dedicadas (Soluções, Portfólio, Contato, Sobre) ainda não existem.

## Alternativas consideradas

1. Deixar os `href` dos CTAs internos como `"#"` até que as páginas existam.
2. Apontar os CTAs de navegação interna (Hero → Soluções/Diagnóstico) para âncoras (`#solucoes`, `#diagnostico`) dentro da própria Home, já que essas seções existem hoje na mesma página; e apontar os CTAs que remetem a conteúdo ainda não construído (Diagnóstico → formulário de contato, CTA final → página "Sobre") para as rotas reais que essas páginas ocuparão (`/contato`, `/sobre`), mesmo antes de essas páginas existirem.

## Decisão

Adotada a alternativa 2. Âncoras internas (`#solucoes`, `#metodo`, `#diagnostico`, `#portfolio`, `#cta-final`) foram adicionadas às seções via prop `id` do componente `Section`, e a navegação (`navigation.ts`) foi atualizada para usar apenas rotas e âncoras que existem de fato hoje. Os CTAs que dependem de páginas ainda não implementadas (`/contato`, `/sobre`) foram mantidos apontando para essas rotas reais, como preparação explícita para a próxima etapa (construção das páginas institucionais), e não como link funcional imediato.

## Justificativa

Âncoras para conteúdo já existente evitam links quebrados hoje. Apontar os CTAs restantes para as rotas reais que ocuparão (em vez de `"#"` genérico) documenta a intenção arquitetural e evita um novo ciclo de "placeholder de link" que precisaria ser substituído depois — o link já nasce correto, apenas aguardando a página ser publicada.

## Consequências

- A Home é publicável como está, mas os links `/contato` e `/sobre` resultarão em 404 até que essas páginas sejam implementadas — risco aceito e documentado, não deve ser publicado em produção antes da criação dessas páginas.
- Cada seção da Home ganhou um `id` estável, que se torna parte do contrato de URL da página (mudança de `id` quebra links externos/internos que os referenciem).

## Dependências

- Depende da futura implementação das páginas `/contato` (com o formulário de diagnóstico) e `/sobre`.

## Atualização (ver ADR-0003)

`/contato` foi implementada. O link do CTA de Diagnóstico deixou de ser preparatório e passou a ser funcional.

## Atualização

`/sobre` também foi implementada (ver `src/pages/sobre.astro`). O link do CTA final da Home ("Conheça a AllLogic") deixou de ser preparatório e passou a ser funcional. Ambas as dependências registradas nesta ADR estão resolvidas.

## Referências

- `src/content/home.ts`, `src/content/navigation.ts`, `src/content/site.ts`
- `docs/design-system.md`
- `docs/content-architecture.md`

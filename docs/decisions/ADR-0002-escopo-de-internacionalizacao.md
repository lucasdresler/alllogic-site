# ADR-0002: Escopo de internacionalização — primeira versão somente em Português do Brasil

## Status

Homologada

## Contexto

Uma decisão anterior, mais ampla, previa o Projeto Atlas como multilíngue desde o início (Português do Brasil, Inglês e Espanhol), com domínio principal `alllogic.com.br` e subdomínios por idioma (`pt.`, `en.`, `es.`), seletor de idioma, tradução automática e SEO multilíngue. Essa decisão foi registrada em conversas anteriores sobre o projeto, mas **nunca chegou a ser implementada** no repositório: a auditoria realizada antes deste ADR confirmou que não existe, no código atual, nenhum seletor de idioma, subdomínio, rota multilíngue, arquivo de tradução, tipo relacionado a idioma, configuração de i18n no Astro (`astro.config.mjs`) ou hreflang. `MainLayout.astro` já usa `lang="pt-BR"` fixo.

A AllLogic decidiu simplificar o escopo da primeira versão pública do site.

## Problema

Manter a internacionalização completa como requisito da primeira versão adicionaria complexidade (roteamento multilíngue, tradução, SEO por idioma, seletor) sem necessidade comprovada agora, atrasando a entrega de um site institucional funcional em Português. Ao mesmo tempo, a arquitetura não deve ser construída de um jeito que dificulte adicionar Inglês e Espanhol no futuro.

## Alternativas consideradas

1. Manter o requisito multilíngue completo como parte da v1 (rejeitada — não há necessidade comprovada agora e atrasaria a entrega).
2. Remover completamente qualquer menção à internacionalização, tratando-a como não decidida (rejeitada — descartaria uma direção estratégica já aprovada, sem necessidade).
3. Escopar a primeira versão como monolíngue (pt-BR), mantendo a internacionalização como requisito arquitetural futuro, documentado e rastreável, sem implementar nada dela agora.

## Decisão

Adotada a alternativa 3.

- **Primeira versão pública:** somente Português do Brasil.
- **Domínio da primeira versão:** `alllogic.com.br`, sem subdomínios `pt.`/`en.`/`es.`, sem rotas `/pt`, `/en`, `/es`.
- **Idiomas futuros (não implementados):** Inglês e Espanhol — permanecem como direção arquitetural, não como requisito funcional da v1.
- **Nenhum código foi removido** nesta tarefa, porque a auditoria confirmou que nenhuma implementação de i18n existe no repositório hoje — não havia o que remover ou simplificar.
- A arquitetura já satisfaz o pré-requisito estrutural para internacionalização futura sem mudança nenhuma: `src/content/` já separa todo o conteúdo institucional e editorial dos componentes (`src/components/`), que consomem exclusivamente `homeContent`/`siteContent`/`navigationContent` tipados, nunca texto hardcoded. Isso significa que, quando a internacionalização for de fato implementada, o trabalho estará concentrado na camada de conteúdo e de roteamento — não vai exigir reescrever componentes de apresentação.

## Justificativa

Esta decisão evita duas formas de retrabalho: (a) construir infraestrutura de i18n sem necessidade comprovada agora, e (b) descartar a direção estratégica multilíngue já aprovada. Como os componentes já são agnósticos de conteúdo (recebem tudo via `src/content`), não há necessidade de nenhuma abstração antecipada (ex.: wrapper de tradução, hook de idioma) para preservar essa possibilidade — isso seria overengineering, explicitamente rejeitado pela diretriz desta tarefa.

## Consequências

- A v1 do Atlas é monolíngue, mais simples de construir, validar e publicar.
- SEO da v1 deve ser tratado como site em Português do Brasil: sem `hreflang`, sem `sitemap` por idioma, sem Open Graph/canonical multilíngue — apenas os metadados técnicos padrão de um site em um único idioma (pendência já registrada separadamente, ver `docs/architecture.md` e TODOs de `MainLayout.astro`).
- Quando a internacionalização for retomada, será necessário decidir: estratégia de roteamento (i18n nativo do Astro vs. estrutura própria), se o conteúdo por idioma vive em arquivos separados por locale dentro de `src/content/` ou em outra estrutura, e a política de tradução (manual vs. automática) — nenhuma dessas decisões foi tomada aqui, propositalmente.

## Dependências

- Depende de uma decisão estratégica futura sobre roteamento multilíngue do Astro antes de qualquer implementação de Inglês/Espanhol.

## Referências

- `docs/content-architecture.md`
- `docs/architecture.md`
- `src/layouts/MainLayout.astro` (`lang="pt-BR"`)
- ADR-0001 (conteúdo real da Home, que esta decisão preserva integralmente — nenhum texto homologado foi alterado)

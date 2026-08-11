# lib

Diretório destinado a código de suporte e **configuração técnica** compartilhada do projeto, sem lógica de apresentação.

## Responsabilidade de `src/lib`

`src/lib` reúne parâmetros de infraestrutura e de funcionamento técnico do site — valores que dizem respeito a *como o site opera* (URLs canônicas, templates de SEO, futuras integrações técnicas), não a *o que o site comunica institucionalmente*.

## Diferença entre `src/lib` (configuração técnica) e `src/content` (conteúdo)

- **`src/lib`** — configuração técnica. Valores usados por mecanismos do próprio site (build, SEO, infraestrutura), sem significado institucional em si.
- **`src/content`** — conteúdo institucional e editorial. Textos, identidade da marca, navegação e narrativa que representam a AllLogic e são exibidos ao visitante, rastreáveis a uma fonte institucional homologada (ver `src/content/README.md` para o fluxo completo, com origem no `FOUNDATION.md` do repositório `alllogic-sga`).

Um mesmo domínio (ex.: "site") pode ter uma parte técnica em `src/lib` (a URL canônica) e uma parte institucional em `src/content` (o nome e a descrição da empresa) — a distinção não é o assunto, é a natureza da informação.

## Responsabilidade específica de `site.config.ts`

`site.config.ts` contém exclusivamente configuração técnica do site:

- `site.url` — URL canônica do site.
- `seo.titleTemplate`, `seo.defaultTitle`, `seo.defaultDescription` — metadados técnicos de SEO.

Não contém, e não deve voltar a conter, informações institucionais como nome da empresa, tagline, contato, redes sociais, CTAs ou itens de navegação — essas responsabilidades pertencem a `src/content/site.ts` e `src/content/navigation.ts`.

## Exemplos

**Pertence a `src/lib`:**
- URL canônica do site.
- Template de título usado pelo mecanismo de SEO.
- Título e descrição padrão de SEO (fallback técnico, não institucional).

**Pertence a `src/content`:**
- Nome, tagline e descrição da empresa.
- Propósito, missão, visão e valores institucionais.
- E-mail e telefone de contato.
- Perfis em redes sociais.
- Textos e CTAs das seções da Home.
- Itens de menu de navegação (principal e rodapé).

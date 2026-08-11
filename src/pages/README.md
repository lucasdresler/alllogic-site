# pages

Diretório destinado às páginas do site — os pontos de entrada de rota do Astro, responsáveis apenas por compor um layout com os componentes de conteúdo correspondentes.

## Responsabilidade de `src/pages`

Uma página em `src/pages` representa uma URL do site. Sua responsabilidade é escolher qual layout usar, quais Props de nível de página passar a esse layout (como `title` e `description`), e em que ordem compor os componentes de conteúdo dentro do `<slot />` do layout. Uma página não define estrutura de documento HTML própria (isso é do layout) nem conteúdo textual próprio (isso é de `src/content`, consumido pelos componentes).

## Relação com o sistema de roteamento do Astro

O Astro usa roteamento baseado em arquivos: cada arquivo `.astro` dentro de `src/pages` vira automaticamente uma rota do site, com o caminho do arquivo definindo a URL. `src/pages/index.astro` corresponde à rota raiz (`/`) do site. Não há configuração de rotas separada — a estrutura de pastas dentro de `src/pages` é a própria definição do mapa de URLs.

## Diferença entre página, layout e componente

- **Página (`src/pages`)** — define uma rota; escolhe um layout e compõe componentes de conteúdo dentro dele; existe uma vez por URL.
- **Layout (`src/layouts`)** — define a estrutura de documento compartilhada (HTML, Header, Footer) e expõe um `<slot />`; é reutilizado por múltiplas páginas.
- **Componente (`src/components`)** — define uma peça reutilizável de interface, consumida por outros componentes, por um layout, ou diretamente por uma página.

Em resumo: a página decide **o quê** e **em que ordem**; o layout decide **a moldura**; o componente decide **como cada peça se parece**.

## Responsabilidade atual de `index.astro`

`index.astro` é a única página do projeto até o momento. Ele:
- Importa `MainLayout` (de `src/layouts/`) e as sete seções da Home (de `src/components/sections/`);
- Passa `title="Projeto Atlas"` e `description="Fundação arquitetural concluída."` como Props explícitas ao `MainLayout`;
- Compõe, dentro do `<slot />` do layout, as seções na ordem: `HeroSection`, `ProblemsSection`, `MethodSection`, `DiagnosisSection`, `SolutionsSection`, `PortfolioSection`, `CTASection`.

Não define nenhum conteúdo textual próprio, nem lógica de negócio — apenas a composição de layout e componentes para a rota `/`.

## Critérios para criação de novas páginas

Criar uma nova página em `src/pages` sempre que o site precisar de uma nova URL/rota. A página deve reutilizar `MainLayout` (ou um layout futuro, se justificado conforme `src/layouts/README.md`) e compor componentes de `src/components/sections/` (criando novas seções específicas daquela página, se necessário) — sem duplicar estrutura de documento HTML nem reescrever lógica já resolvida pelo layout.

## Páginas devem apenas compor — não concentrar regras de negócio nem conteúdo institucional

Uma página não deve conter texto institucional hardcoded, lógica condicional de negócio, nem definições de dados. Qualquer conteúdo textual deve vir de `src/content`, consumido pelos componentes que a página compõe; qualquer necessidade de configuração técnica deve vir de `src/lib`. A página em si deve permanecer um arquivo curto e declarativo — uma lista de "qual layout, quais Props, quais componentes, em que ordem" — sem se tornar o lugar onde decisões de conteúdo ou de negócio são tomadas.

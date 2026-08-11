# layouts

Diretório destinado aos layouts do site — os "invólucros" de página que definem a estrutura HTML de nível mais alto e compõem os componentes compartilhados de navegação em torno do conteúdo de cada página.

## Responsabilidade de `src/layouts`

Um layout define o esqueleto que toda página que o utiliza compartilha: documento HTML completo (`<html>`, `<head>`, `<body>`), metatags básicas, e a composição dos componentes de navegação (`Header`, `Footer`) ao redor do `<slot />` onde o conteúdo específico de cada página é injetado. Um layout não sabe qual é esse conteúdo — apenas garante que ele seja renderizado dentro da estrutura correta.

## Diferença entre layout e componente

- **Layout (`src/layouts`)** — define a estrutura de página inteira, é o ponto de entrada usado por arquivos em `src/pages`, e normalmente aparece uma única vez por página, no topo da árvore de renderização. Recebe o conteúdo da página via `<slot />`.
- **Componente (`src/components`)** — define uma peça reutilizável de interface (estrutural, de navegação ou de conteúdo, conforme documentado em `src/components/README.md`), é consumido por outros componentes ou por um layout, e pode aparecer múltiplas vezes na mesma árvore de renderização.

Em resumo: um layout **envolve** a página; um componente **compõe** a página (ou o próprio layout).

## Responsabilidade atual de `MainLayout.astro`

`MainLayout.astro` é o único layout do projeto até o momento. Ele:
- Define a estrutura HTML5 (`<html lang="pt-BR">`, `<head>`, `<body>`);
- Recebe `title` e `description` via Props, com fallback para `siteContent.company.name` e `siteContent.company.description` (de `src/content/site.ts`) quando não informados;
- Renderiza `<meta charset>`, `<meta viewport>`, `<title>` e `<meta name="description">`;
- Importa os estilos globais (`src/styles/index.css`);
- Compõe `Header` e `Footer` (de `src/components/navigation/`) ao redor de um `<main><slot /></main>`, onde o conteúdo de cada página é injetado.

Ele não define nenhum conteúdo textual próprio, nem regra de negócio — apenas estrutura e composição.

## Critérios para criação de novos layouts

Criar um novo layout quando um conjunto de páginas precisar de uma estrutura de página fundamentalmente diferente da oferecida por `MainLayout` — por exemplo, uma página sem `Header`/`Footer` (uma landing page isolada), ou com metatags/estrutura de `<head>` distintas o suficiente para não caber como variação de Props do layout existente. Se a diferença puder ser resolvida com uma Prop adicional em `MainLayout` (ex.: ocultar uma seção condicionalmente), preferir estender o layout existente a criar um novo.

## Como layouts devem consumir componentes sem incorporar regras de negócio ou conteúdo institucional

Um layout deve importar e compor componentes (como `Header` e `Footer`) exatamente como eles já existem, sem redefinir seu comportamento interno, sem passar conteúdo institucional hardcoded como Props, e sem decidir *o que* é exibido dentro deles. Qualquer texto ou dado institucional que o layout precise (como o fallback de título/descrição) deve vir de `src/content`, nunca ser escrito diretamente no arquivo do layout. O layout orquestra a montagem da página; ele não é dono de nenhum conteúdo nem de nenhuma regra sobre como esse conteúdo deve ser tratado.

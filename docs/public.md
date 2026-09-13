# public

Diretório destinado aos arquivos estáticos públicos do Projeto Atlas. No Astro, tudo que estiver em `public/` é disponibilizado diretamente na raiz do site e copiado para a saída do build sem ser processado pela cadeia de ativos do framework.

No estado atual, esta pasta contém os favicons, a identidade visual pública utilizada pelo site, imagens de Open Graph, imagens do portfólio e o endpoint PHP do formulário de diagnóstico. Os ativos visuais atualmente presentes fazem parte da implementação publicada.

## Responsabilidade de `public/`

Use `public/` para arquivos que precisam ser entregues exatamente como foram adicionados ao repositório e referenciados por uma URL pública estável. Um arquivo em `public/favicon.svg`, por exemplo, é servido como `/favicon.svg`.

A maior parte desta pasta é destinada a ativos estáticos públicos que não requerem importação ou processamento pelo Astro. A exceção arquitetural atual é `public/api/diagnosis.php`, que existe nesse caminho por depender de uma URL pública estável e é executado pelo ambiente de hospedagem como endpoint PHP; ele não é um ativo estático.

## Conteúdo atual

A estrutura atualmente utilizada é:

- `public/images/favicon/` — favicons e ícones públicos do site.
- `public/images/logo-alllogic.png` — logotipo público utilizado pela implementação.
- `public/images/og-alllogic.png` — imagem pública para compartilhamento/Open Graph.
- `public/images/portfolio/` — imagens públicas dos projetos apresentados no portfólio.
- `public/api/diagnosis.php` — endpoint PHP responsável pelo recebimento e encaminhamento das solicitações do formulário de diagnóstico. Sua responsabilidade está registrada também no ADR-0003.

`public/api/diagnosis.php` deve ser tratado separadamente dos ativos estáticos: embora esteja fisicamente dentro de `public/`, ele representa uma integração executável necessária ao funcionamento do formulário.

## `public/` e recursos em `src/`

| Local | Uso | Comportamento |
| --- | --- | --- |
| `public/` | Arquivos estáticos públicos com URL direta. | O Astro os copia para o build sem processamento de ativos. |
| `src/assets/` | Recursos que fazem parte da implementação e são importados pelo código. | O Astro pode incluí-los, referenciá-los e processá-los como ativos da aplicação. |

Utilize `public/` quando o arquivo precisar conservar seu nome e caminho público, ou quando ele não for importado por um componente, página, layout ou outro arquivo de `src/`. Utilize `src/assets/` quando o recurso fizer parte da interface implementada e puder ser importado e gerenciado pelo pipeline do Astro.

## Arquivos que pertencem a `public/`

Quando necessários e aprovados, os exemplos a seguir podem pertencer a esta pasta:

- Favicons e ícones de navegador.
- `robots.txt` e outros arquivos públicos com caminho convencional.
- Imagens estáticas referenciadas diretamente por URL e que não precisem de processamento.
- Arquivos disponibilizados para download, como PDFs institucionais homologados.
- Arquivos de verificação de serviços externos, quando forem necessários e não contiverem dados sensíveis.

Os exemplos não representam funcionalidades já existentes no Atlas. Antes de adicionar qualquer ativo, verificar o escopo da tarefa e a documentação aplicável.

## Arquivos que não pertencem a `public/`

Não coloque nesta pasta:

- Código-fonte, componentes Astro, páginas, layouts, tipos ou utilitários.
- Conteúdo institucional ou editorial estruturado, que pertence a `src/content/`.
- Configuração técnica do projeto, que pertence a `src/lib/` ou aos arquivos de configuração apropriados da raiz.
- CSS global ou CSS específico de componentes.
- Recursos visuais importados pela interface e que devem ser processados pelo Astro; esses pertencem a `src/assets/`.
- Segredos, variáveis de ambiente, chaves, arquivos internos ou qualquer dado que não deva ser exposto publicamente.
- Artefatos gerados de build, dependências ou arquivos temporários.

## Boas práticas de organização

- Manter apenas ativos efetivamente públicos e necessários.
- Usar nomes descritivos, estáveis e em minúsculas, separados por hífens quando houver mais de uma palavra.
- Agrupar futuros ativos por finalidade em subdiretórios claros, como `images/` ou `downloads/`, somente quando houver necessidade real.
- Referenciar os arquivos pelo caminho público iniciado em `/`; nunca usar `/public/` na URL.
- Evitar duplicar o mesmo recurso em `public/` e `src/assets/`; escolher uma única fonte conforme a necessidade de processamento e consumo.
- Revisar tamanho, formato, direitos de uso e acessibilidade dos ativos antes de incluí-los.

## Decisão de uso

Escolha `public/` para ativos estáticos de acesso direto e sem processamento. Escolha recursos dentro de `src/` — em especial `src/assets/` — quando o ativo integrar a implementação da interface e se beneficiar do fluxo de importação e processamento do Astro.

Na dúvida, preserve a arquitetura atual e reporte a necessidade antes de criar uma duplicação ou introduzir uma nova convenção de ativos.

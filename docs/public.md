# public

Diretório destinado aos arquivos estáticos públicos do Projeto Atlas. No Astro, tudo que estiver em `public/` é disponibilizado diretamente na raiz do site e copiado para a saída do build sem ser processado pela cadeia de ativos do framework.

No estado atual, esta pasta contém os favicons do site. Eles são ativos públicos necessários para identificação no navegador e deverão ser substituídos pela identidade visual homologada da AllLogic quando essa decisão existir.

## Responsabilidade de `public/`

Use `public/` para arquivos que precisam ser entregues exatamente como foram adicionados ao repositório e referenciados por uma URL pública estável. Um arquivo em `public/favicon.svg`, por exemplo, é servido como `/favicon.svg`.

Esta pasta não é uma camada de conteúdo, componentes, estilos, configuração técnica ou código. Ela é exclusivamente o local para ativos estáticos que não requerem importação ou processamento pelo Astro.

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

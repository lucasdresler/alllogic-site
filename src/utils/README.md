# utils

Diretório destinado a **funções utilitárias** reutilizáveis, sem estado e sem dependência de contexto de apresentação.

## Responsabilidade de `src/utils`

`src/utils` reúne funções puras de suporte — pequenas transformações de dados que podem ser chamadas a partir de qualquer camada do projeto (componentes, arquivos de conteúdo, configuração) sem carregar valores, textos ou lógica de renderização próprios. Uma função de `src/utils` recebe entrada, devolve saída, e não tem opinião sobre onde ou como o resultado será exibido.

## Que tipo de função pertence a `src/utils`

- Funções puras (mesma entrada → mesma saída, sem efeitos colaterais).
- Formatação de dados (datas, números, strings) para exibição.
- Validação de dados (formato de e-mail, telefone, URL).
- Transformação/normalização de estruturas de dados (ex.: converter um array em outro formato, agrupar itens, ordenar).
- Pequenos helpers genéricos que não dependem de nenhum domínio específico do site.

## Que tipo de função NÃO pertence a `src/utils`

- Funções que retornam JSX/markup ou renderizam algo diretamente — isso é responsabilidade de `src/components`.
- Funções que contêm texto, valores institucionais ou de conteúdo hardcoded — isso pertence a `src/content`.
- Funções que leem ou definem parâmetros técnicos do site (URL canônica, templates de SEO) — isso pertence a `src/lib`.
- Funções que existem apenas para dar nome a uma estrutura de dados (isso é um tipo, não uma função) — isso pertence a `src/types`.
- Lógica específica de uma única página ou componente, sem reuso real em outro lugar — nesse caso, a função deve permanecer local ao próprio arquivo que a usa.

## Diferença entre utilitários, configuração, conteúdo e componentes

- **`src/utils`** — *como transformar um dado*. Funções puras, sem valores nem apresentação.
- **`src/lib`** — *como o site funciona tecnicamente*. Configuração técnica (URL, SEO), sem lógica de transformação genérica nem conteúdo.
- **`src/content`** — *o que o site comunica*. Valores institucionais e editoriais (textos, navegação), sem lógica de transformação nem apresentação.
- **`src/components`** — *como o dado é exibido*. Markup e apresentação, consumindo dados de `src/content`, configuração de `src/lib`, e podendo usar funções de `src/utils` para formatar o que exibem.

## Exemplos de futuros utilitários (não implementados nesta tarefa)

- **Formatação**: uma função que formate um número de telefone para exibição padronizada; uma função que formate uma data para o padrão brasileiro.
- **Validação**: uma função que valide o formato de um e-mail antes de um envio de formulário; uma função que valide se uma URL informada é bem-formada.
- **Transformação de dados**: uma função que ordene os itens de `navigationContent.main` por algum critério; uma função que agrupe os blocos de `SolutionsSection` em lotes para paginação futura.

Nenhuma dessas funções foi criada nesta tarefa — os exemplos acima são apenas ilustrativos do tipo de utilitário que pertenceria a este diretório no futuro.

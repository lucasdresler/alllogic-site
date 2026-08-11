# docker

Diretório reservado à infraestrutura conteinerizada do Projeto Atlas. Ele será o local de imagens e configurações de contêiner necessárias para ambientes consistentes de desenvolvimento e publicação, conforme a direção arquitetural do projeto.

## Estado atual

No momento, não há Dockerfile, arquivo Docker Compose, configuração de Traefik, script ou outro artefato de contêiner nesta pasta. Este `README.md` é o único arquivo atual e documenta a responsabilidade reservada para a camada.

Não há comportamento de Docker ou Docker Compose implementado no repositório neste estágio. Portanto, nenhum comando, serviço, porta, volume, imagem ou fluxo de execução deve ser inferido a partir desta documentação.

## Relação com o Projeto Atlas

O código da aplicação Astro permanece em `src/`, e sua construção é definida pelos arquivos de configuração da raiz do repositório. A pasta `docker/` não substitui essas responsabilidades: ela será usada somente para empacotar ou executar a aplicação em contêineres quando uma implementação específica for aprovada.

A direção do projeto prevê que o ambiente de produção seja composto por um contêiner da aplicação, com roteamento pelo Traefik e exposição pela Cloudflare. Essa é uma direção arquitetural; as configurações correspondentes ainda não existem neste repositório.

## O que pertence a esta camada

Quando houver necessidade aprovada, podem pertencer a `docker/` apenas arquivos de infraestrutura de contêiner diretamente relacionados ao Atlas, como:

- Dockerfiles da aplicação;
- arquivos de composição de serviços;
- configurações de execução de contêineres;
- scripts de inicialização ou publicação exclusivos do ambiente conteinerizado;
- arquivos de exemplo seguros necessários para configurar esses ambientes.

Esses itens não existem atualmente e só devem ser adicionados com escopo, decisão arquitetural e documentação correspondentes.

## O que não pertence a esta camada

Não coloque em `docker/`:

- código-fonte da aplicação, componentes, páginas, layouts, estilos ou conteúdo;
- configuração técnica interna da aplicação que pertença à raiz do projeto ou a `src/lib/`;
- dependências instaladas, artefatos de build, logs ou arquivos temporários;
- credenciais, chaves, tokens, variáveis de ambiente com valores reais ou qualquer dado sensível;
- configurações de infraestrutura sem relação direta com os contêineres do Projeto Atlas.

## Boas práticas para evolução futura

- Adicionar somente arquivos necessários a uma decisão de infraestrutura aprovada.
- Manter cada configuração pequena, explícita e específica da sua responsabilidade.
- Usar imagens e versões justificadas, reproduzíveis e compatíveis com as definições do projeto.
- Manter segredos fora do versionamento; quando necessário, fornecer apenas exemplos seguros.
- Documentar comandos, serviços, portas, volumes e relações com Traefik somente depois que existirem de fato.
- Validar a configuração em ambiente apropriado e registrar decisões arquiteturais relevantes antes de expandir esta camada.

Até que uma implementação seja aprovada, esta pasta deve permanecer sem arquivos de configuração adicionais.

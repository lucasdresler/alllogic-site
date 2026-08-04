# Arquitetura do Projeto Atlas

## Objetivo

Estabelecer a direção arquitetural do Projeto Atlas para que o site institucional da AllLogic evolua com clareza, qualidade e foco nas pessoas.

## Princípios Arquiteturais

- Pessoas em primeiro lugar.
- Desempenho por padrão.
- Arquitetura antes da implementação.
- Manutenibilidade e responsabilidades bem definidas.
- Acessibilidade e semântica.
- Evolução segura, com decisões rastreáveis.

## Stack

O projeto utiliza Astro, TypeScript e CSS moderno. Docker, Traefik, Cloudflare e Git compõem a direção definida para ambientes, publicação e colaboração. As responsabilidades de cada tecnologia estão apresentadas no [README principal](../README.md#stack).

## Organização do Projeto

O Atlas adota geração estática como estratégia principal. Interatividade no navegador será utilizada de forma seletiva, quando agregar valor claro à experiência.

## Organização das Pastas

A estrutura geral prevista contempla áreas para ativos, componentes, conteúdo, dados, layouts, páginas, scripts, estilos, tipos e utilitários, além de diretórios para infraestrutura, documentação e testes. A referência de estrutura está no [README principal](../README.md#estrutura-geral).

## Separação de Responsabilidades

- Conteúdo: informações institucionais estruturadas e validadas.
- Componentes de interface: elementos reutilizáveis e acessíveis.
- Páginas e layouts: composição das rotas e experiências.
- Estilos e tokens de design: fundamentos visuais centralizados.
- Infraestrutura e publicação: configuração versionada e documentada.

## Evolução da Arquitetura

As definições arquiteturais serão amadurecidas conforme o projeto evoluir. Decisões relevantes deverão ser registradas como ADRs no diretório [decisions/](decisions/), após análise e aprovação no fluxo oficial da AllLogic.

## Referências

- [README principal](../README.md)
- [Fluxo de Desenvolvimento](MOA/fluxo-desenvolvimento.md)
- [Fluxo de Homologação Tecnológica](MOA/fluxo-homologacao.md)
- [Homologação do Astro 7.1.6](MOA/homologacoes/astro-7.1.6.md)

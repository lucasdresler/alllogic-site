# Projeto Atlas

## Site Institucional da AllLogic Online

Site institucional oficial da **AllLogic Online**, desenvolvido com Astro e orientado por arquitetura, documentação e desempenho.

> A tecnologia deve trabalhar para as pessoas.

## Visão geral

O Projeto Atlas é o repositório oficial do site institucional da AllLogic Online. Ele foi concebido para comunicar serviços, competências, cultura e visão técnica da empresa com uma experiência rápida, acessível, sustentável e fácil de manter.

Além de canal de comunicação, este repositório representa a forma como a AllLogic Online constrói soluções: com arquitetura intencional, qualidade de engenharia e foco nas pessoas que usam e mantêm a tecnologia.

## Objetivos

- Representar institucionalmente a AllLogic Online.
- Demonstrar a qualidade técnica da empresa.
- Servir como vitrine das soluções desenvolvidas.
- Disponibilizar conteúdo técnico organizado.
- Evoluir continuamente como produto.

## Princípios

- **Pessoas em primeiro lugar:** decisões técnicas devem melhorar a experiência de clientes, visitantes e equipe.
- **Desempenho por padrão:** entregar o mínimo necessário, com páginas rápidas e eficientes.
- **Arquitetura antes da implementação:** mudanças relevantes são analisadas e documentadas antes de serem construídas.
- **Manutenibilidade:** componentes, conteúdo e infraestrutura possuem responsabilidades bem definidas.
- **Acessibilidade e semântica:** a web deve ser utilizável por todas as pessoas.
- **Evolução segura:** Git, revisão e automação protegem a qualidade das entregas.

## Stack

| Tecnologia | Responsabilidade |
| --- | --- |
| [Astro](https://astro.build/) | Construção de páginas rápidas, estáticas por padrão e com interatividade seletiva. |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem e maior segurança na evolução do código. |
| CSS moderno | Design system, responsividade e estilos sem dependências desnecessárias. |
| [Docker](https://www.docker.com/) | Ambientes consistentes para desenvolvimento e publicação. |
| [Traefik](https://traefik.io/traefik/) | Roteamento e terminação HTTPS nos ambientes conteinerizados. |
| [Cloudflare](https://www.cloudflare.com/) | DNS, proteção, cache e distribuição de conteúdo. |
| [Git](https://git-scm.com/) | Versionamento e colaboração controlada. |

## Direção arquitetural

O site será construído com Astro e TypeScript, adotando geração estática como estratégia principal. Recursos que exigirem JavaScript no navegador serão implementados como ilhas, somente quando trouxerem valor claro à experiência.

O projeto deverá manter uma separação explícita entre:

- **conteúdo**, validado e estruturado;
- **componentes de interface**, reutilizáveis e acessíveis;
- **páginas e layouts**, responsáveis pela composição;
- **estilos e tokens de design**, centralizados;
- **infraestrutura e publicação**, versionadas e documentadas.

## Estrutura geral

```text
src/
├── assets/       # Imagens, ícones e ativos processados pelo Astro
├── components/   # Componentes base, comuns e seções de página
├── content/      # Conteúdo institucional e coleções tipadas
├── data/         # Configurações e dados compartilhados
├── layouts/      # Estruturas reutilizáveis de página
├── pages/        # Rotas do site
├── scripts/      # Comportamentos client-side pontuais
├── styles/       # Tokens, estilos globais e utilitários
├── types/        # Tipos compartilhados
└── utils/        # Funções utilitárias puras

docker/           # Imagens e configurações de contêiner
docs/             # Arquitetura, ADRs e guias operacionais
tests/            # Testes unitários e de ponta a ponta
```

## Fluxo Oficial de Desenvolvimento

O desenvolvimento do Projeto Atlas segue o fluxo oficial adotado pela AllLogic Online para orientar mudanças relevantes, com clareza de contexto, decisão e rastreabilidade:

1. Entender
2. Pesquisar
3. Discutir
4. Aprovar
5. Implementar
6. Validar
7. Documentar
8. Versionar
9. Publicar

O detalhamento de cada etapa está disponível no [Fluxo de Desenvolvimento](docs/MOA/fluxo-desenvolvimento.md).

## Padrões de qualidade

- HTML semântico e navegação por teclado.
- Layout responsivo e compatível com diferentes tamanhos de tela.
- Imagens e fontes otimizadas.
- JavaScript limitado ao necessário.
- Verificação de tipos, lint e formatação automatizados.
- Revisão de código antes da integração.
- Monitoramento contínuo de desempenho, acessibilidade e boas práticas.

## Ambientes e publicação

A publicação atual utiliza a saída estática gerada pelo Astro e hospedagem compartilhada cPanel. A homologação técnica da publicação e as evidências do ambiente de produção estão registradas em [Homologação da Publicação](docs/MOA/homologacoes/publicacao-site-alllogic-2026-09-13.md).

Docker e Traefik permanecem como direção futura de infraestrutura para o site, não como componentes do ambiente de produção atual. Credenciais, chaves e outros segredos não devem ser versionados.

## Estado do Projeto

O Projeto Atlas está publicado em produção em https://alllogiconline.com.br/. A publicação atual foi tecnicamente homologada, incluindo a validação do build estático e das páginas públicas dentro do escopo registrado na documentação.

O Design System possui fundamentos e tokens implementados e documentados. O projeto continua em evolução: a publicação do site não significa que todas as atividades técnicas e documentais estejam concluídas.

As próximas entregas e pendências devem ser acompanhadas no [Roadmap](docs/roadmap.md), mantendo as decisões, validações e mudanças documentadas e versionadas.

## Documentação

Toda a documentação técnica e operacional do Projeto Atlas está organizada em [docs/](docs/):

- [Arquitetura](docs/architecture.md): princípios e direção arquitetural do projeto.
- [Roadmap](docs/roadmap.md): fases, entregas concluídas e próximas etapas.
- [Changelog](docs/changelog.md): marcos relevantes da evolução do Atlas.
- [Design System](docs/design-system.md): estrutura dos fundamentos da interface.
- [Decisões](docs/decisions/README.md): registros de decisões arquiteturais.
- [MOA](docs/MOA/README.md): padrões e procedimentos operacionais da AllLogic Online.

---

**AllLogic Online — Engenharia de Soluções Digitais**

Tecnologia que trabalha para as pessoas.

## Licença

© AllLogic Online.

Todos os direitos reservados.

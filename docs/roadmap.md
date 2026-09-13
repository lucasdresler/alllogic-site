# Roadmap do Projeto Atlas

O roadmap organiza a evolução do Projeto Atlas por fases. Ele orienta o planejamento sem substituir as decisões aprovadas ou o detalhamento técnico da arquitetura.

## Fase 1 — Fundação do Projeto

**Status: ✔ Concluída**

Entregas concluídas:

- Fundação do Projeto Atlas.
- Documentação inicial do projeto.
- Homologação do Astro 7.1.6.
- Integração da base Astro.
- Publicação do repositório no GitHub.

## Fase 2 — Consolidação das Bases

**Status: 🚧 Em andamento**

Próximas etapas:

- Consolidar a documentação de arquitetura e registrar decisões relevantes.
- Manter o Design System homologado documentado e alinhado à implementação.
- Consolidar o conteúdo institucional prioritário e suas fontes homologadas.
- Preparar e revisar os ambientes e os critérios de homologação necessários às próximas entregas.

## Fase 3 — Evolução do Site Institucional

**Status: 🚧 Em andamento**

Escopo de internacionalização da primeira versão (ver [ADR-0002](decisions/ADR-0002-escopo-de-internacionalizacao.md)): somente Português do Brasil, sem subdomínios ou rotas por idioma. A definição histórica de domínio registrada nessa ADR foi posteriormente superada pelo [ADR-0004](decisions/ADR-0004-dominio-oficial-site-institucional.md), que estabelece `alllogiconline.com.br` como domínio oficial vigente do site institucional. Internacionalização (Inglês e Espanhol) permanece como direção arquitetural futura, sem bloquear esta fase.

### Entregas implementadas

- Home institucional (`/`), incluindo as seções Soluções, Portfólio e Diagnóstico.
- Página Sobre (`/sobre`).
- Página Contato (`/contato`), incluindo o formulário de diagnóstico integrado ao endpoint PHP.
- Página Domínios e Hospedagem (`/dominios-e-hospedagem`).
- Página Política de Privacidade (`/politica-de-privacidade`).
- Navegação institucional entre páginas e seções.
- Identidade visual e ativos públicos atualmente utilizados pela implementação.
- Publicação do site em produção.
- Definição do domínio oficial vigente `alllogiconline.com.br`, registrada no ADR-0004.

### Pendências da V1

- Avaliar e implementar, se aprovadas, as páginas institucionais ainda não existentes, incluindo Termos de Uso e página 404.
- Concluir as validações técnicas e de homologação correspondentes às entregas atuais.
- Consolidar e versionar a documentação relacionada à arquitetura, publicação e operação.

### Direção futura

- Internacionalização (Inglês e Espanhol), sem data definida.

## Atualização

O roadmap deve ser atualizado quando um marco relevante for concluído ou quando uma próxima fase for aprovada.

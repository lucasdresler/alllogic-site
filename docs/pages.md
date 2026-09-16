# Páginas do Site

## Objetivo

Registrar a estrutura atual de páginas do site institucional da AllLogic Online, suas rotas e responsabilidades principais.

Este documento descreve a implementação vigente e não substitui as decisões arquiteturais registradas em `docs/decisions/`.

---

## Páginas atuais

### Página inicial

**Arquivo:** `src/pages/index.astro`
**Rota:** `/`

Responsabilidade:

- apresentar a AllLogic Online;
- comunicar o posicionamento institucional;
- apresentar as principais soluções;
- apresentar o portfólio;
- conduzir o visitante ao diagnóstico;
- apresentar o fluxo conceitual da AllLogic Online;
- direcionar para as demais áreas institucionais.

É a principal porta de entrada do site.

---

### Sobre

**Arquivo:** `src/pages/sobre.astro`
**Rota:** `/sobre/`

Responsabilidade:

- apresentar institucionalmente a AllLogic Online;
- comunicar sua proposta e posicionamento;
- apresentar informações institucionais efetivamente homologadas.

O conteúdo deve permanecer estritamente baseado nas informações institucionais aprovadas.

---

### Contato

**Arquivo:** `src/pages/contato.astro`
**Rota:** `/contato/`

Responsabilidade:

- permitir o contato com a AllLogic Online;
- apresentar o formulário de diagnóstico;
- coletar as informações necessárias para uma primeira compreensão da necessidade do visitante;
- encaminhar a solicitação por meio da integração definida em `ADR-0003`.

O formulário utiliza `src/services/diagnosisSubmission.ts` e o endpoint `public/api/diagnosis.php`.

---

### Domínios e Hospedagem

**Arquivo:** `src/pages/dominios-e-hospedagem.astro`
**Rota:** `/dominios-e-hospedagem/`

Responsabilidade:

- apresentar a solução relacionada a domínios e hospedagem;
- comunicar a proposta da solução sem inferir preços, condições comerciais, recursos ou garantias não homologados.

---

### Política de Privacidade

**Arquivo:** `src/pages/politica-de-privacidade.astro`
**Rota:** `/politica-de-privacidade/`

Responsabilidade:

- apresentar a Política de Privacidade vigente do site;
- documentar o tratamento relacionado ao uso do site, formulário de contato e recursos de análise de navegação;
- manter coerência com os mecanismos de consentimento e coleta efetivamente implementados.

---

## Navegação

A navegação principal atualmente contempla:

- **Início** → `/`
- **Soluções** → `/#solucoes`
- **Portfólio** → `/#portfolio`
- **Diagnóstico** → `/#diagnostico`
- **Sobre** → `/sobre/`
- **Contato** → `/contato/`

O rodapé contempla:

- **Política de Privacidade** → `/politica-de-privacidade/`

As seções de Soluções, Portfólio e Diagnóstico permanecem integradas à página inicial, por meio de âncoras.

---

## Princípios

- Cada rota deve possuir uma responsabilidade clara.
- Conteúdo institucional deve utilizar somente informações homologadas.
- Páginas devem permanecer simples e coerentes com a arquitetura estática-first.
- Não criar páginas independentes apenas para fragmentar conteúdo que funciona adequadamente como seção da página inicial.
- Novas páginas ou alterações relevantes de arquitetura devem ser precedidas pela definição correspondente e, quando necessário, por uma decisão arquitetural formal.

---

## Referências

- `AGENTS.md`
- `README.md`
- `docs/architecture.md`
- `docs/content-architecture.md`
- `docs/design-system.md`
- `docs/decisions/`

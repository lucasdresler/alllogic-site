# Documentação Técnica — Página do Produto Agillex Agenda no Site Institucional

**Data:** 12/10/2026
**Repositório:** Projeto Atlas (`~/AllLogic/Site`)
**Stack:** Astro 5 / TypeScript / CSS Moderno
**URL de Destino do Produto:** `/agillex-agenda`
**CTA Primário (Provisório):** `https://agenda.alllogiconline.com.br/agillex` (aguardando aprovação explícita)
**CTA de Contato (Oficial):** `https://wa.me/5511966381915` (WhatsApp oficial AllLogic Online)

---

## 1. Objetivo

Apresentar a solução comercial **Agillex Agenda** no site institucional oficial da **AllLogic Online**, comunicando com fidelidade técnica a proposta de valor, a amplitude do público-alvo atendido e os recursos funcionais essenciais, orientando o visitante à experimentação da ferramenta ou ao atendimento direto via WhatsApp oficial.

A estrutura segue a separação estrita entre conteúdo estruturado, apresentação visual e composição de rotas adotada no Projeto Atlas.

---

## 2. Arquitetura e Componentes

A implementação divide-se em três camadas de responsabilidade:

1. **Conteúdo estruturado (`src/content/agillex.ts`):**
   - Centraliza todos os textos, dados de seções e chamadas para ação sob tipagem TypeScript local (`AgillexContent`).
   - Adota redação institucional conservadora e sem promessas não homologadas (sem prazos arbitrários de teste ou garantias contratuais não documentadas).
   - O botão secundário do Hero consome o WhatsApp oficial verificado da AllLogic Online (`https://wa.me/5511966381915`).

2. **Componentes de apresentação (`src/components/agillex/`):**
   - `AgillexHeroSection.astro` + `agillex-hero-section.css`:
     - Título e proposta de valor;
     - Botão primário "Experimentar o Agillex Agenda" e botão secundário "Fale com nossa equipe" direcionado ao WhatsApp oficial com `target="_blank" rel="noopener noreferrer"`;
     - Mensagem de confiança: *"Configuração simples · Você organiza seu negócio diretamente na plataforma"*.
   - `AgillexAudienceSection.astro` + `agillex-audience-section.css`:
     - Título: *"Desenvolvido para negócios que atendem com hora marcada"*;
     - Texto complementar: *"Negócios que atendem com hora marcada e/ou que precisam organizar e ter fácil acesso à lista de clientes a serem atendidos."*;
     - Descrição ampla sem restrição a pequeno porte: *"Perfeito para empresas e prestadores de serviços de todos os portes que buscam atender seus clientes de forma profissional, sem complicações operacionais."*;
     - 5 nichos de mercado: Barbearias e Salões, Estética e Beleza, Clínicas e Consultórios, Petshops e Personal Trainers, Estúdios e Serviços;
     - Grid inteligente balanceado: 5 colunas em desktop largo (> 1140px); grid 6-colunas simétrico em telas médias (769px–1140px) com 3 cards na linha superior e 2 cards centralizados na linha inferior; 2 colunas em tablets compactos (581px–768px); e coluna única em celulares (<= 580px).
   - `AgillexFeaturesSection.astro` + `agillex-features-section.css`:
     - 6 recursos funcionais essenciais em `Grid` de 3 colunas, incluindo a "Página Pública de Agendamento".
   - `AgillexTrialSection.astro` + `agillex-trial-section.css`:
     - Bloco com benefícios práticos da ferramenta;
     - Mensagem de suporte: *"A equipe da AllLogic Online está disponível para orientar e esclarecer qualquer dúvida."*;
     - Card de conversão com botão para acesso ao sistema e nota orientando consulta comercial.

3. **Composição da rota (`src/pages/agillex-agenda.astro`):**
   - Composição limpa de 19 linhas importando o layout e as quatro seções.

---

## 3. Diretrizes de Destinos e Pendências Comerciais

1. **Destino da aplicação (`https://agenda.alllogiconline.com.br/agillex`):**
   - Utilizado provisoriamente no botão principal do Hero e no card da seção de fechamento.
   - *Status:* **Aguardando aprovação explícita do responsável** quanto à manutenção definitiva dessa URL de destino.
2. **Canal de contato da AllLogic Online:**
   - O botão secundário do Hero utiliza o canal oficial de WhatsApp da AllLogic Online (`https://wa.me/5511966381915`), conforme homologado em `site.ts` e `Footer.astro`.
3. **Autonomia de uso:**
   - A comunicação enfatiza que a configuração e organização dos serviços, profissionais e horários é realizada diretamente na plataforma pelo próprio usuário, eliminando qualquer menção à necessidade de implantação assistida.

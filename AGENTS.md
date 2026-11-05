# AGENTS.md — Site Institucional AllLogic Online (Projeto Atlas)

## Contexto do Projeto

Este documento orienta os Agentes de IA que atuam no repositório do **Site Institucional da AllLogic Online (Projeto Atlas)**, subordinado às diretrizes gerais do `~/AllLogic/AGENTS.md` e aos fundamentos de `~/AllLogic/SGA/FOUNDATION.md`.

O **Projeto Atlas** é o portal institucional oficial da empresa, responsável por posicionar a AllLogic Online (*Engenharia de Soluções Digitais*), comunicar o portfólio oficial (Família Agillex, Domínios e Hospedagem, Soluções Sob Medida) e gerar autoridade técnica e comercial.

---

## 1. Arquitetura e Tecnologias

- **Domínio de Produção:** `https://alllogiconline.com.br/`
- **Plataforma Base:** Astro 5 (Static Site Generation - SSG)
- **Frontend:** TypeScript, Tailwind CSS, componentes Astro modulares, CSS moderno e assets otimizados.
- **Hospedagem & Infraestrutura:** Servidor cPanel / EVEO (Top Hospedagem Web, IP `177.104.163.165`).
- **Acesso Remoto:** SSH / SFTP na porta `21008` (usuário `alllogiconline`, chave `~/.ssh/id_rsa`).
- **Diretório Remoto:** `/home2/alllogiconline/public_html/`.

---

## 2. Estrutura do Repositório Local

- `src/` — Código-fonte da aplicação Astro.
  - `pages/` — Páginas e rotas estáticas (`index.astro`, `termos.astro`, etc.).
  - `layouts/` — Layouts compartilhados (`BaseLayout.astro`, `Layout.astro`).
  - `components/` — Componentes reutilizáveis (Hero, Header, Footer, Portfolio, Solucoes, Contato).
  - `content/` — Conteúdo estruturado e acervo documental.
  - `styles/` — Folhas de estilo e tokens visuais.
- `public/` — Arquivos estáticos servidos diretamente na raiz (favicons, manifest, robots.txt).
- `dist/` — Artefatos finais gerados pelo build estático (`npm run build`).
- `docs/` — Documentação técnica, arquitetura (`architecture.md`) e procedimentos operacionais (`MOA/`).

---

## 3. Procedimento Operacional de Deploy

1. Realizar alterações e validações técnicas no ambiente local (`src/`).
2. Executar build local para comprovar integridade e ausência de erros:
   ```bash
   npm run build
   ```
3. **Portão Obrigatório de Aprovação:** Apresentar ao fundador um resumo claro das alterações propostas, arquivos afetados e resultado do build local. Formular explicitamente a pergunta de autorização e pausar a execução. Fica proibido comitar ou publicar sem autorização expressa.
4. **Execução Contínua Pós-Autorização:** Uma vez concedida a autorização pelo fundador, a execução deve prosseguir de forma contínua até a conclusão de todas as etapas previstas, sem interrupções para confirmações intermediárias:
   - Criar commit semântico e enviar com `git push origin main`.
   - Gerar backup das versões anteriores em produção (`backups/public_html-pre-deploy-*.tar.gz`) e validar com `gzip -t`.
   - Transferir pacote para staging e sincronizar o diretório gerado `dist/` via SFTP/SSH na porta `21008` para `/home2/alllogiconline/public_html/`.
   - Executar testes de validação pós-deploy (verificação HTTP 200, integridade do endpoint PHP e entrega de assets atualizados).
   - Apresentar o relatório final de evidências de publicação.

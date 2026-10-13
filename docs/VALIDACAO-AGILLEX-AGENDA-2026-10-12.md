# Relatório de Validação Técnica e Publicação — Página Agillex Agenda

**Data:** 12/10/2026
**Projeto:** Projeto Atlas (Site Institucional AllLogic Online)
**Repositório:** `~/AllLogic/Site`
**Commit Publicado:** `a7ad6e1` (`a7ad6e1c9109518987a617e2e95ffaf1d26032c6`)
**Rota auditada:** `/agillex-agenda/`
**Status geral:** Publicado e Homologado em Produção

---

## 1. Objetivo da Homologação e Publicação

Registrar a validação técnica, homologação visual e o deploy em ambiente de produção da página do **Agillex Agenda** (`/agillex-agenda/`), assegurando:
- Publicação estática realizada sem indisponibilidade ou quebra de rotas existentes;
- Configuração do WhatsApp oficial da AllLogic Online no botão secundário de contato;
- Documentação da pendência de aprovação explícita para o destino provisório `https://agenda.alllogiconline.com.br/agillex`;
- Nova mensagem de confiança destacando a autonomia de configuração do cliente na plataforma;
- Expansão do público-alvo com texto complementar e 5 nichos equilibrados (incluindo Petshops e Personal Trainers);
- Atualização do suporte para orientações gerais sem sugerir implantação assistida obrigatória;
- Inspeção visual real em desktop (1280px), tablet (900px) e celular (375px);
- Preservação integral do endpoint dinâmico `api/diagnosis.php`.

---

## 2. Ajustes Aplicados no Conteúdo e Apresentação

### 2.1. Botões e Destinos de Ação
- **Botão Primário (Hero e Seção Final):** Mantido provisoriamente o texto *"Experimentar o Agillex Agenda"* e *"Acessar o Agillex Agenda"*, apontando para `https://agenda.alllogiconline.com.br/agillex`.
  - *Pendência formal:* Registra-se que esse destino externo **ainda não possui aprovação explícita do responsável**, sendo preservado de forma provisória.
- **Botão de Contato (Hero):** Substituído o link interno `/contato` pelo **WhatsApp oficial homologado da AllLogic Online**:
  - URL configurada: `https://wa.me/5511966381915`
  - Evidência documental: número `(11) 96638-1915` homologado em `src/content/site.ts` (`siteContent.contact.whatsapp`), `src/components/navigation/Footer.astro` e `src/layouts/MainLayout.astro`.
  - Atributos adicionados: `target="_blank"` e `rel="noopener noreferrer"`.

### 2.2. Mensagem de Confiança (Hero)
- **Texto anterior:** *"Tecnologia prática · Implantação orientada pela AllLogic"*
- **Texto homologado:** *"Configuração simples · Você organiza seu negócio diretamente na plataforma"*
- **Racional:** Enfatiza que o próprio cliente realiza o cadastro de profissionais, serviços e horários na plataforma, sem sugerir instalação técnica ou obrigatoriedade de implantação assistida.

### 2.3. Seção de Público-Alvo
- **Título:** *"Desenvolvido para negócios que atendem com hora marcada"*
- **Texto Complementar:** *"Negócios que atendem com hora marcada e/ou que precisam organizar e ter fácil acesso à lista de clientes a serem atendidos."*
- **Descrição:** *"Perfeito para empresas e prestadores de serviços de todos os portes que buscam atender seus clientes de forma profissional, sem complicações operacionais."*

### 2.4. Cards de Segmentos (Público-Alvo)
Atualizado de 4 para 5 cards:
1. **Barbearias e Salões** (ícone `✂`): *"Organize múltiplos profissionais, durações específicas de cortes e serviços com visualização clara da jornada diária."*
2. **Estética e Beleza** (ícone `✨`): *"Permita que seus clientes escolham serviços combinados e horários disponíveis sem necessidade de trocas infinitas de mensagens."*
3. **Clínicas e Consultórios** (ícone `⚕`): *"Atendimento organizado com regras de antecedência mínima, intervalos de descanso e histórico de reagendamentos."*
4. **Petshops e Personal Trainers** (ícone `🐾`): *"Defina horários para sessões e atendimentos específicos, organize a lista de clientes e mantenha serviços e horários sob controle."*
5. **Estúdios e Serviços** (ícone `★`): *"Sua marca em destaque com página própria de agendamento online funcionando 24 horas por dia, 7 dias por semana."*

### 2.5. Suporte e Acompanhamento (Seção Prática)
- **Texto homologado:** *"A equipe da AllLogic Online está disponível para orientar e esclarecer qualquer dúvida."*
- **Racional:** Remove a menção a "implantação" para reforçar a autonomia de uso da ferramenta.

---

## 3. Inspeção Visual e Responsividade

A renderização foi inspecionada visualmente em desktop e viewport móvel:

| Viewport | Resolução | Comportamento do Grid de Público-Alvo | Avaliação Visual |
|---|---|---|---|
| **Desktop Largo** | 1280 × 3400 px | 5 colunas (`repeat(5, 1fr)`) em linha única. Espaçamento homogêneo (`1.5rem`), cartões proporcionais. | **Aprovado** |
| **Tablet / Telas Médias** | 900 × 3800 px | Grid inteligente de 6 colunas: 3 cards na linha superior (span 2 cada) e 2 cards centralizados na linha inferior (colunas 2..3 e 4..5, span 2 cada). Todos os 5 cards possuem **larguras perfeitamente idênticas**. | **Aprovado** |
| **Tablet Compacto** | 768 × 3800 px | 2 colunas com o 5º card centralizado na 3ª linha. | **Aprovado** |
| **Celular (Mobile)** | 375 × 5400 px | Coluna única vertical fluida. **Zero overflow horizontal**, tipografia legível e botões empilhados sem quebra de layout. | **Aprovado** |

---

## 4. Registro da Publicação em Produção

A publicação foi executada via SSH na porta `21008` no servidor de produção, seguindo o procedimento formal documentado no MOA (`docs/MOA/publicacao-site-astro-cpanel.md`).

### 4.1. Dados Operacionais do Deploy
- **Servidor:** `177.104.163.165` (SSH porta `21008`)
- **Usuário remoto:** `alllogiconline`
- **Diretório público:** `/home2/alllogiconline/public_html/`
- **Diretório de backup:** `/home2/alllogiconline/backups/`
- **Pacote utilizado:** `alllogic-site-agillex-a7ad6e1.tar.gz`
- **SHA-256 do pacote:** `b6ccac175d29b7e644b24be028a83d99b5719cd1efa067187345831a0664fd02`
- **Backup pré-publicação:** `public_html-pre-agillex-20261012-200717.tar.gz` (íntegro, testado via `gzip -t` e `tar -tzf`)
- **Diretório de homologação:** `/home2/alllogiconline/staging-agillex-a7ad6e1`

### 4.2. Sequência Executada
1. **Validação prévia:** Checksum SHA-256 do pacote confirmado e integridade do arquivo de backup verificada.
2. **Inspeção de segurança:** Nenhuma ocorrência de caminhos absolutos ou traversal detectada no pacote.
3. **Staging:** Pacote extraído em `/home2/alllogiconline/staging-agillex-a7ad6e1`.
4. **Comparação de integrações:** Arquivo `api/diagnosis.php` comparado via `cmp -s`, confirmando versão idêntica à de produção.
5. **Cópia de arquivos de suporte:** Diretórios `_astro/` e `images/` copiados para `public_html/`.
6. **Cópia da nova rota:** Diretório `agillex-agenda/` copiado para `public_html/` e existência do `index.html` confirmada.
7. **Atualização de páginas existentes:** Atualizados `contato/`, `dominios-e-hospedagem/`, `politica-de-privacidade/`, `sobre/`, `sitemap-index.xml` e `sitemap-0.xml`.
8. **Atualização da Home:** Arquivo `index.html` atualizado por último, garantindo disponibilidade de todos os links de destino.
9. **Verificação final:** Confirmada a presença de todos os arquivos publicados e a preservação do endpoint `api/diagnosis.php`.

---

## 5. Testes HTTP em Produção

Após a publicação, foram executadas requisições HTTP automáticas em produção com os seguintes resultados observados:

| URL Testada | Código HTTP | Resultado |
|---|---|---|
| `https://alllogiconline.com.br/` | **200 OK** | Aprovado |
| `https://alllogiconline.com.br/agillex-agenda/` | **200 OK** | Aprovado |
| `https://alllogiconline.com.br/contato/` | **200 OK** | Aprovado |
| `https://alllogiconline.com.br/sobre/` | **200 OK** | Aprovado |
| `https://alllogiconline.com.br/dominios-e-hospedagem/` | **200 OK** | Aprovado |
| `https://alllogiconline.com.br/politica-de-privacidade/` | **200 OK** | Aprovado |
| `https://alllogiconline.com.br/sitemap-index.xml` | **200 OK** | Aprovado |

---

## 6. Preservação de Serviços e Pendências

1. **WhatsApp de Atendimento:** Homologado e funcional como `https://wa.me/5511966381915`.
2. **Serviço de Diagnóstico:** O arquivo `api/diagnosis.php` permaneceu intacto e disponível em produção.
3. **URL Provisória da Aplicação:** O link `https://agenda.alllogiconline.com.br/agillex` permanece no CTA principal e no card final, catalogado como aguardando confirmação explícita do responsável.
4. **Etapas Futuras Catalogadas:**
   - Criação da página de cadastro em `/agillex`;
   - Tabela comparativa de recursos e preços;
   - Unificação definitiva dos textos dos botões de ação.
5. **Limitação Operacional do Deploy:** Conforme registrado no MOA, falhas parciais durante a cópia não executam rollback de forma automática; em caso de anomalia, o procedimento documentado requer restauração manual a partir de `public_html-pre-agillex-20261012-200717.tar.gz`.

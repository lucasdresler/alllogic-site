# Procedimento de Publicação — Site Atlas (Astro/cPanel)

## Ambiente

- Servidor: `177.104.163.165`
- Usuário SSH: `alllogiconline`
- Porta SSH: `21008`
- Diretório público: `/home2/alllogiconline/public_html/`
- Diretório de backups: `/home2/alllogiconline/backups/`
- Diretório base remoto: `/home2/alllogiconline/`
- Artefatos locais: `dist/`
- Estratégia: publicação estática Astro por SSH/SCP com área de staging intermediária.

## Pré-requisitos

1. Consultar `~/AllLogic/AGENTS.md` e `AGENTS.md` do projeto.
2. Verificar `git status`, sincronizar a branch sem descartar alterações e conferir novamente o estado.
3. Executar `npm run build` e validar os artefatos.
4. Identificar precisamente os arquivos gerados que serão publicados.
5. Confirmar acesso SSH na porta `21008` e espaço disponível no servidor.
6. Criar um backup integral atual de `public_html` antes de substituir arquivos.

## Backup pré-publicação

Criar backup integral com carimbo de data e hora no diretório de backups do servidor, validando imediatamente sua integridade:

```bash
BASE=/home2/alllogiconline
STAMP=$(date +%Y%m%d-%H%M%S)
BACKUP="$BASE/backups/public_html-pre-deploy-$STAMP.tar.gz"
tar -czf "$BACKUP" -C "$BASE" public_html
gzip -t "$BACKUP"
tar -tzf "$BACKUP" >/dev/null
sha256sum "$BACKUP"
```

Registrar caminho, integridade e SHA-256 do backup gerado na evidência da publicação. Nunca prosseguir sem validação prévia bem-sucedida do backup.

## Preparação e homologação em Staging

1. O `rsync` não está disponível no servidor; utilizar `scp` na porta `21008`.
2. Gerar o pacote `.tar.gz` a partir de `dist/`, sem incluir a pasta local `imagens/` nem arquivos externos ao build.
3. Calcular o SHA-256 do pacote localmente.
4. Transferir o pacote para `/home2/alllogiconline/` via `scp` na porta `21008`.
5. No servidor, conferir o checksum SHA-256 do pacote transferido antes de qualquer ação:
   ```bash
   sha256sum "$PACOTE"
   ```
6. Validar os caminhos internos do pacote para assegurar ausência de caminhos absolutos ou traversal:
   ```bash
   tar -tzf "$PACOTE" | grep -E '(^/|(^|/)\.\.(/|$))'
   ```
7. Criar diretório temporário exclusivo de staging (`/home2/alllogiconline/staging-<identificador>`) e extrair o pacote:
   ```bash
   mkdir "$STAGE"
   tar -xzf "$PACOTE" -C "$STAGE"
   ```
8. Verificar a presença e tamanho não-vazio de todos os arquivos de entrada em staging.
9. Comparar o endpoint PHP existente em produção com a versão em staging:
   ```bash
   cmp -s "$PUBLIC/api/diagnosis.php" "$STAGE/api/diagnosis.php"
   ```
   Garantir que a API de produção seja preservada e não substituída indevidamente.

## Sequência de publicação dos artefatos

A publicação copia seletivamente os artefatos compilados para o diretório público sem apagar arquivos existentes de produção (não utilizar `rm -rf`, não usar `rsync --delete` e não limpar `public_html`).

A ordem controlada de cópia é:

1. **Arquivos de suporte:**
   - Copiar estilos e scripts compilados: `cp -a "$STAGE/_astro/." "$PUBLIC/_astro/"`
   - Copiar imagens públicas: `mkdir -p "$PUBLIC/images" && cp -a "$STAGE/images/." "$PUBLIC/images/"`
2. **Novas rotas:**
   - Copiar diretórios das novas rotas (ex.: `cp -a "$STAGE/agillex-agenda" "$PUBLIC/"`)
   - Validar a presença e integridade do `index.html` correspondente.
3. **Páginas existentes e sitemaps:**
   - Atualizar diretórios de páginas existentes (`contato/`, `dominios-e-hospedagem/`, `politica-de-privacidade/`, `sobre/`).
   - Atualizar sitemaps (`sitemap-index.xml` e `sitemap-0.xml`).
4. **Página inicial (última etapa):**
   - Atualizar `/home2/alllogiconline/public_html/index.html`.
   - Ao atualizar a Home por último, garante-se que quando o visitante acessar a página com links atualizados, todas as páginas de destino, recursos CSS e novas rotas já estejam disponíveis no servidor.
5. **Verificação de arquivos publicados:**
   - Confirmar a existência e integridade de todas as páginas públicas e a preservação do endpoint `api/diagnosis.php`.

## Validação pós-publicação

Validar por HTTPS:

1. **Testes HTTP:**
   Efetuar requisições via `curl` verificando retorno `200` em todas as URLs testadas:
   - `https://alllogiconline.com.br/`
   - `https://alllogiconline.com.br/agillex-agenda/`
   - `https://alllogiconline.com.br/contato/`
   - `https://alllogiconline.com.br/sobre/`
   - `https://alllogiconline.com.br/dominios-e-hospedagem/`
   - `https://alllogiconline.com.br/politica-de-privacidade/`
   - `https://alllogiconline.com.br/sitemap-index.xml`
2. **Inspeção visual manual:**
   - Inspecionar layout, tipografia, espaçamentos, botões de ação e ausência de rolagem horizontal em desktop e viewport móvel (mobile).
3. **Serviços dinâmicos preservados:**
   - Confirmar integridade de `api/diagnosis.php`, sem envio de diagnóstico real.

## Rollback

1. Identificar o backup correspondente criado antes da publicação.
2. Preservar os logs e evidências da falha.
3. Restaurar o conteúdo do backup com procedimento controlado a partir do arquivo compactado:
   ```bash
   tar -xzf "$BACKUP" -C "$BASE"
   ```
4. Validar novamente as rotas e o endpoint de diagnóstico.
5. Registrar a causa, a restauração e o resultado.

Nunca executar publicação ou rollback quando o backup estiver ausente ou inválido.

## Limitações conhecidas

- **Ausência de rollback automático:** Como o deploy ocorre via cópia sequencial de arquivos sobre o sistema de arquivos do cPanel, caso ocorra falha ou interrupção durante a cópia, os arquivos já copiados permanecerão no servidor até intervenção manual com restauração do backup.
- **Inexistência de `rsync`:** A transferência remota depende de pacote compactado via `scp` na porta `21008`.
- **Atomicidade no cPanel:** A substituição seletiva não é transacional no filesystem compartilhado; a ordem controlada (suporte → novas rotas → páginas existentes → Home) é o mecanismo utilizado para mitigar janelas de inconsistência para os usuários finais.

## Registro de referência — Publicação Agillex Agenda (12/10/2026)

- **Commit de referência:** `a7ad6e1`
- **Servidor:** `177.104.163.165`, porta SSH `21008`, usuário `alllogiconline`
- **Diretório público:** `/home2/alllogiconline/public_html/`
- **Diretório de backup:** `/home2/alllogiconline/backups/`
- **Pacote utilizado:** `alllogic-site-agillex-a7ad6e1.tar.gz`
- **SHA-256 do pacote:** `b6ccac175d29b7e644b24be028a83d99b5719cd1efa067187345831a0664fd02`
- **Backup pré-publicação:** `public_html-pre-agillex-20261012-200717.tar.gz`
- **Diretório de homologação:** `/home2/alllogiconline/staging-agillex-a7ad6e1`
- **Validações prévias:** Backup e pacote validados com sucesso antes de qualquer cópia.
- **Preservação de serviços:** Endpoint `api/diagnosis.php` comparado e preservado intacto.
- **Sequência executada:** Suporte e imagens → nova rota `/agillex-agenda/` → páginas existentes e sitemaps → página inicial (`index.html`).
- **Respostas HTTP:** Retorno `200` confirmado para `/`, `/agillex-agenda/`, `/contato/`, `/sobre/`, `/dominios-e-hospedagem/`, `/politica-de-privacidade/` e `/sitemap-index.xml`.
- **Inspeção visual:** Confirmada manualmente em desktop e dispositivos móveis (mobile).

## Registro de referência — Publicação Agillex Atendimento (16/10/2026)

- **Commit de referência:** `e9def19`
- **Servidor:** `177.104.163.165`, porta SSH `21008`, usuário `alllogiconline`
- **Diretório público:** `/home2/alllogiconline/public_html/`
- **Diretório de backup:** `/home2/alllogiconline/backups/`
- **Pacote utilizado:** `alllogic-site-agillex-atendimento-e9def19.tar.gz`
- **SHA-256 do pacote:** `a2eac78ebc57ff737a38cd8f608e99b743c4cc8c163a84dbfe666aec75fc74f4`
- **Backup pré-publicação:** `public_html-pre-deploy-20261016-135232.tar.gz` (SHA-256: `c9504bd184b61710ffdad851f919277692ec19964f596da15178a649b6de7fae`)
- **Diretório de homologação:** `/home2/alllogiconline/staging-agillex-atendimento-e9def19`
- **Validações prévias:** Backup e pacote validados com sucesso antes de qualquer cópia.
- **Preservação de serviços:** Endpoint `api/diagnosis.php` comparado e preservado intacto.
- **Sequência executada:** Suporte e imagens → nova rota `/agillex-atendimento/` → rotas existentes e sitemaps → página inicial (`index.html`).
- **Respostas HTTP:** Retorno `200` confirmado para `/`, `/agillex-atendimento/`, `/agillex-agenda/`, `/contato/`, `/sobre/`, `/dominios-e-hospedagem/`, `/politica-de-privacidade/`, `/sitemap-index.xml` e `/sitemap-0.xml`.

## Registro de referência — Publicação Agillex Hub e Modernização Visual (16/10/2026)

- **Commit de referência:** `0a7ddd9`
- **Servidor:** `177.104.163.165`, porta SSH `21008`, usuário `alllogiconline`
- **Diretório público:** `/home2/alllogiconline/public_html/`
- **Diretório de backup:** `/home2/alllogiconline/backups/`
- **Pacote utilizado:** `alllogic-site-hub-0a7ddd9.tar.gz`
- **SHA-256 do pacote:** `49662c566b74b32e84ba57a6b6e98f89c67bb8db209ee7d2366eb1099da471f8`
- **Backup pré-publicação:** `public_html-pre-deploy-20261016-194606.tar.gz` (SHA-256: `a69ab0e872827ad813fce54a9c89048489ce01429c4e1041256a4e4df4b7085e`)
- **Diretório de homologação:** `/home2/alllogiconline/staging-hub-0a7ddd9`
- **Validações prévias:** Backup e integridade do pacote validados com sucesso antes da substituição.
- **Preservação de serviços:** Endpoint `api/diagnosis.php` preservado e verificado intacto.
- **Sequência executada:** Suporte e imagens → nova rota `/agillex-hub/` → rotas existentes e sitemaps → página inicial (`index.html`).
- **Respostas HTTP:** Retorno `200` confirmado para `/`, `/agillex-hub/`, `/agillex-agenda/`, `/agillex-atendimento/`, `/contato/`, `/sobre/`, `/dominios-e-hospedagem/`, `/politica-de-privacidade/` e `/sitemap-index.xml`.
- **Inspeção de conformidade:** 100% de uso do nome oficial "AllLogic Online" em todas as páginas e correções ortográficas aplicadas.

## Registro de referência — Publicação Ecossistema, FAQ Estruturado e Agendamento Direto (18/10/2026)

- **Commit de referência:** `0173119`
- **Servidor:** `177.104.163.165`, porta SSH `21008`, usuário `alllogiconline`
- **Diretório público:** `/home2/alllogiconline/public_html/`
- **Diretório de backup:** `/home2/alllogiconline/backups/`
- **Pacote utilizado:** `alllogic-site-ecosystem-0173119.tar.gz`
- **SHA-256 do pacote:** `99e8997075131d5cdcb7402c4917a0eba62cf85c83d95c9e222a087840728aa1`
- **Backup pré-publicação:** `public_html-pre-deploy-20261018-002909.tar.gz` (SHA-256: `8ae3e476dfbca55094eac0531deb6fee53cd2171688a088397c32ba8673c54b9`)
- **Diretório de homologação:** `/home2/alllogiconline/staging-ecosystem-0173119`
- **Validações prévias:** Backup íntegro e validado com `gzip -t` e `tar -tzf`, SHA-256 verificado remotamente.
- **Preservação de serviços:** Endpoint `api/diagnosis.php` comparado com `cmp -s` e verificado 100% idêntico.
- **Sequência executada:** Suporte e imagens (`_astro/`, `images/`) → rotas `/agillex-hub/`, `/agillex-agenda/`, `/agillex-atendimento/`, `/contato/`, `/sobre/`, `/dominios-e-hospedagem/`, `/politica-de-privacidade/` → sitemaps → página inicial (`index.html`).
- **Respostas HTTP:** Retorno `200` confirmado em todas as rotas e validação do Schema.org `FAQPage` e links para `agenda.alllogiconline.com.br` ativos em produção.

## Registro de referência — Publicação dos Termos de Uso e Contrato Mestre (18/10/2026)

- **Commit de referência:** `74c43fa`
- **Servidor:** `177.104.163.165`, porta SSH `21008`, usuário `alllogiconline`
- **Diretório público:** `/home2/alllogiconline/public_html/`
- **Diretório de backup:** `/home2/alllogiconline/backups/`
- **Pacote utilizado:** `alllogic-site-termos-74c43fa.tar.gz`
- **SHA-256 do pacote:** `e077c89b56c6250920c426eb3e5989652a9d9500f1a059272b2b5a67b3f9f92f`
- **Backup pré-publicação:** `public_html-pre-deploy-20261018-020244.tar.gz` (SHA-256: `4a985a5294ba53a06c3ab6b1acc2f8a400eb2179a98ce29af36ff666aceeea87`)
- **Diretório de homologação:** `/home2/alllogiconline/staging-termos-74c43fa`
- **Validações prévias:** Backup íntegro e validado com `gzip -t` e `tar -tzf`, SHA-256 verificado remotamente antes de qualquer substituição.
- **Preservação de serviços:** Endpoint `api/diagnosis.php` comparado via `cmp -s` e verificado 100% idêntico.
- **Sequência executada:** Suporte e assets (`_astro/`, `images/`) → nova rota `/termos-de-uso/` → rotas existentes (`/`, `/agillex-hub/`, `/agillex-agenda/`, `/agillex-atendimento/`, `/contato/`, `/sobre/`, `/dominios-e-hospedagem/`, `/politica-de-privacidade/`) → sitemaps.
- **Respostas HTTP:** Retorno `200` confirmado para `/`, `/termos-de-uso/`, `/agillex-hub/`, `/agillex-agenda/`, `/agillex-atendimento/`, `/contato/`, `/sobre/`, `/dominios-e-hospedagem/`, `/politica-de-privacidade/`, `/sitemap-index.xml`.
- **Navegação:** Link "Termos de Uso" incorporado e validado no rodapé de todas as páginas públicas do site.

## Registro de referência — Correção de Sequência de CTAs na Home (18/10/2026)

- **Commit de referência:** `970e556`
- **Servidor:** `177.104.163.165`, porta SSH `21008`, usuário `alllogiconline`
- **Diretório público:** `/home2/alllogiconline/public_html/`
- **Diretório de backup:** `/home2/alllogiconline/backups/`
- **Pacote utilizado:** `alllogic-site-cta-fix-970e556.tar.gz`
- **SHA-256 do pacote:** `bd8dcfddcc25528192ca6f573a2d2e1191065773abeaf32fb3026333fe4f2ad8`
- **Backup pré-publicação:** `public_html-pre-deploy-20261018-091604.tar.gz` (SHA-256: `b01bb8786c009733f25988b00bc9d107290e0efac8192773251c5da9efecdc3e`)
- **Diretório de homologação:** `/home2/alllogiconline/staging-cta-fix-970e556`
- **Validações prévias:** Backup íntegro e validado com `gzip -t`, SHA-256 verificado remotamente antes de qualquer substituição.
- **Preservação de serviços:** Endpoint `api/diagnosis.php` comparado via `cmp -s` e verificado 100% idêntico.
- **Sequência executada:** Suporte e assets atualizados → rotas públicas sincronizadas.
- **Respostas HTTP:** Retorno `200` confirmado para `/` e todas as rotas públicas.
- **Ordem das seções:** `#metodo` → `#diagnostico` → `#solucoes` → `#ecossistema` → `#portfolio` → `#faq` → `#cta-final`, eliminando duplicação consecutiva de CTAs no final da Home.

## Registro de referência — Saneamento de CTAs Institucionais e WhatsApp Oficial (18/10/2026)

- **Commit de referência:** `6a10fba`
- **Servidor:** `177.104.163.165`, porta SSH `21008`, usuário `alllogiconline`
- **Diretório público:** `/home2/alllogiconline/public_html/`
- **Diretório de backup:** `/home2/alllogiconline/backups/`
- **Pacote utilizado:** `alllogic-site-cta-url-fix-6a10fba.tar.gz`
- **SHA-256 do pacote:** `322d2d2f6f47083c4ed4386b4a466bcaebd50a30d86cee87a28dfc0d3c820fcc`
- **Backup pré-publicação:** `public_html-pre-deploy-20261018-093517.tar.gz` (SHA-256: `99369b7f5af653c1adfed187ce62d5bf1175cfaa66e8014505cbc82d0523211e`)
- **Diretório de homologação:** `/home2/alllogiconline/staging-cta-url-fix-6a10fba`
- **Validações prévias:** Backup íntegro e validado com `gzip -t`, SHA-256 verificado remotamente.
- **Preservação de serviços:** Endpoint `api/diagnosis.php` comparado via `cmp -s` e verificado 100% idêntico.
- **Sequência executada:** Suporte e assets atualizados → rotas públicas sincronizadas.
- **Respostas HTTP:** Retorno `200` confirmado para `/`, `/sobre/`, `/contato/` e todas as rotas.
- **Ajustes de CTAs aplicados:**
  - Primeiro CTA da Home (`#diagnostico`): botão "Agendar conversa online" removido; mantido exclusivamente "Enviar Diagnóstico" (`/contato`).
  - Segundo CTA da Home (`#cta-final`): botão "Agendar horário online" removido; botão principal alterado para "Vamos conversar?" apontando para o WhatsApp oficial (`https://wa.me/5511966381915`).
  - Páginas Sobre e Contato: links indevidos para a demonstração do Agillex Agenda saneados.

## Registro de referência — Refinamento Visual e Sede Cadastral São Paulo/SP (18/10/2026)

- **Commit de referência:** `997925d`
- **Servidor:** `177.104.163.165`, porta SSH `21008`, usuário `alllogiconline`
- **Diretório público:** `/home2/alllogiconline/public_html/`
- **Diretório de backup:** `/home2/alllogiconline/backups/`
- **Pacote utilizado:** `alllogic-site-visual-fix-997925d.tar.gz`
- **SHA-256 do pacote:** `7ab55246393a829ac77f4befdc060e47f3bd4ab5d6c7283e7c01dd3f79f38605`
- **Backup pré-publicação:** `public_html-pre-deploy-20261018-094520.tar.gz` (SHA-256: `e1ae44f8e73a14ac817950083dbccb83e3e1cc6264e77929d83434a5dab4ee0b`)
- **Diretório de homologação:** `/home2/alllogiconline/staging-visual-fix-997925d`
- **Validações prévias:** Backup íntegro e validado com `gzip -t`, SHA-256 verificado remotamente.
- **Preservação de serviços:** Endpoint `api/diagnosis.php` comparado via `cmp -s` e verificado 100% idêntico.
- **Sequência executada:** Suporte e assets atualizados → rotas públicas sincronizadas.
- **Respostas HTTP:** Retorno `200` confirmado para todas as rotas públicas.
- **Ajustes aplicados:**
  - Botão "Voltar ao topo" (`scroll-to-top`): seta atualizada de preto para branco puro (`#ffffff`) com `text-shadow` para máxima legibilidade e destaque.
  - Termos de Uso e Política de Privacidade: endereço cadastral padronizado para "com sede cadastral em São Paulo/SP".

## Registro de referência — Atualização Integral da Política de Privacidade (18/10/2026)

- **Commit de referência:** `e3ef801`
- **Servidor:** `177.104.163.165`, porta SSH `21008`, usuário `alllogiconline`
- **Diretório público:** `/home2/alllogiconline/public_html/`
- **Diretório de backup:** `/home2/alllogiconline/backups/`
- **Pacote utilizado:** `alllogic-site-privacy-e3ef801.tar.gz`
- **SHA-256 do pacote:** `64d85ceff12a9947da3c7d76fcc61a892afb8d9837881e02699121760e149133`
- **Backup pré-publicação:** `public_html-pre-deploy-20261018-101247.tar.gz` (SHA-256: `2f10073a97858f711112612f0777f25e1997cf27fd524d5a2dd6bf170956864b`)
- **Diretório de homologação:** `/home2/alllogiconline/staging-privacy-e3ef801`
- **Validações prévias:** Backup íntegro e validado com `gzip -t`, SHA-256 verificado remotamente.
- **Preservação de serviços:** Endpoint `api/diagnosis.php` comparado via `cmp -s` e verificado 100% idêntico.
- **Sequência executada:** Suporte e assets atualizados → rotas públicas sincronizadas.
- **Respostas HTTP:** Retorno `200` confirmado para todas as rotas públicas.
- **Ajustes aplicados:**
  - Política de Privacidade integralmente reestruturada e alinhada à LGPD (Lei nº 13.709/2018).
  - Distinção entre Controladora (portal e leads) e Operadora (Família Agillex com isolamento multi-tenant).
  ## Registro de referência — Automação da Contratação de Hospedagem (18/10/2026)

- **Commit de referência:** `170f33c`
- **Servidor:** `177.104.163.165`, porta SSH `21008`, usuário `alllogiconline`
- **Diretório público:** `/home2/alllogiconline/public_html/`
- **Diretório de backup:** `/home2/alllogiconline/backups/`
- **Pacote utilizado:** `pacote-site.tar.gz`
- **SHA-256 do pacote:** `c99b86e14bc2a6aa8fb905ae2eaca2200c6438000773dfeaf41461c6d17cd2ef`
- **Backup pré-publicação:** `public_html-pre-deploy-20261018-150638.tar.gz` (SHA-256: `7d28f6014a2005302a78d1d4e20aa08f3b4fe795fb4dc4319298fa77df87e98e`)
- **Diretório de homologação:** `/home2/alllogiconline/staging-deploy`
- **Validações prévias:** Backup íntegro e validado com `gzip -t`, SHA-256 verificado remotamente.
- **Respostas HTTP:** Retorno `200` confirmado para `/dominios-e-hospedagem/`.
- **Ajustes aplicados:**
  - Substituição dos links manuais de WhatsApp dos botões "Contratar Plano" na seção de Hospedagem.
  - Conexão direta e parametrizada com o Checkout Central (`hub.alllogiconline.com.br/checkout?modulo=hospedagem&plano=...&ciclo=...&dominio=...`).
  - Sincronização dinâmica com alternância de ciclo (Mensal e Anual -20% OFF) e domínio selecionado na busca.

## Registro de referência — Mini-guia de Vendas para Afiliados e Agilex Atende (21/10/2026)

- **Commit de referência:** `f056db1`
- **Servidor:** `177.104.163.165`, porta SSH `21008`, usuário `alllogiconline`
- **Diretório público:** `/home2/alllogiconline/public_html/`
- **Diretório de backup:** `/home2/alllogiconline/backups/`
- **Pacote utilizado:** `alllogic-site-afiliados-tutorial-f056db1.tar.gz`
- **SHA-256 do pacote:** `87c27f58f50c8e6e2cf7d5bd6fd3391f9754a5711ee35feb5d28d17c4a95090b`
- **Backup pré-publicação:** `public_html-pre-deploy-20261021-223301.tar.gz` (SHA-256: `d354c1485331f67ba46656934ab8bf5e4c0e83416f0d3ba7960378f2f7fac34d`)
- **Diretório de homologação:** `/home2/alllogiconline/staging-afiliados-f056db1`
- **Validações prévias:** Backup íntegro e testado com `gzip -t` e `tar -tzf`, SHA-256 do pacote verificado remotamente antes de qualquer substituição.
- **Preservação de serviços:** Endpoints `api/diagnosis.php` e `api/affiliates.php` comparados via `cmp -s` e verificados 100% idênticos; diretório de dados (`api/data/`) preservado intacto.
- **Sequência executada:** Suporte e assets (`_astro/`, `images/`) → rotas `/agilex-atende/`, `/agillex-atendimento/`, `/afiliados/` → rotas existentes e sitemaps → página inicial (`index.html`).
- **Respostas HTTP:** Retorno `200` confirmado para `/`, `/afiliados/`, `/agilex-atende/`, `/agillex-atendimento/`, `/dominios-e-hospedagem/`, `/agillex-agenda/`, `/agillex-hub/`, `/contato/`, `/sobre/`, `/politica-de-privacidade/`, `/termos-de-uso/` e `/sitemap-index.xml`.
- **Ajustes aplicados:**
  - Mini-guia prático de vendas na página de afiliados (`/afiliados#guia-vendas`) cobrindo 8 produtos/serviços com dores, público-alvo, scripts/pitches prontos para WhatsApp e comissões.
  - Paleta nobre e diversificada aplicada ao guia de vendas, combinando Preto Grafite, Dourado/Âmbar e Verde Esmeralda/WhatsApp para evitar saturação azul.
  - Renomeação oficial do produto para **Agilex Atende** em todas as páginas, rotas e documentações, mantendo rota de compatibilidade em `/agillex-atendimento/`.
  - Padronização do nome institucional para **AllLogic Online**.

## Registro de referência — Correção do Botão Compartilhar WhatsApp no Programa de Afiliados (22/10/2026)

- **Commit de referência:** `e87863f`
- **Servidor:** `177.104.163.165`, porta SSH `21008`, usuário `alllogiconline`
- **Diretório público:** `/home2/alllogiconline/public_html/`
- **Diretório de backup:** `/home2/alllogiconline/backups/`
- **Pacote utilizado:** `alllogic-site-whatsapp-share-e87863f.tar.gz`
- **SHA-256 do pacote:** `80bcd29f6e689e9f0e3d954a77ed94e021bd788178f3f49dd27e58c9611261f0`
- **Backup pré-publicação:** `public_html-pre-deploy-20261022-000500.tar.gz` (SHA-256: `660f274b2a03966e7e4e58698992c5ab9b7403216c70ab90290c04e3bb306ff2`)
- **Diretório de homologação:** `/home2/alllogiconline/staging-whatsapp-share-e87863f`
- **Validações prévias:** Backup íntegro e validado com `gzip -t`, SHA-256 do pacote verificado remotamente antes de qualquer substituição.
- **Preservação de serviços:** Endpoints `api/diagnosis.php` e `api/affiliates.php` comparados via `cmp -s` e verificados 100% íntegros; base local de afiliados (`api/data/`) preservada intacta.
- **Sequência executada:** Suporte e assets (`_astro/`, `images/`) → rotas `/afiliados/`, `/agilex-atende/`, `/agillex-atendimento/` → rotas existentes e sitemaps → página inicial (`index.html`).
- **Respostas HTTP:** Retorno `200` confirmado para todas as rotas públicas.
- **Ajustes aplicados:**
  - Substituição da tag âncora com `href="#"` do botão "Compartilhar meu Link no WhatsApp" por `<button type="button">`.
  - Implementação de listener de clique direto abrindo a API oficial do WhatsApp (`https://wa.me/?text=...`) com o link dinâmico de afiliado gerado, eliminando completamente o salto da página para `/#`.
  - Atualização do texto de compartilhamento para a nomenclatura oficial **Agilex Atende**.

## Registro de referência — Sistema Completo de Animações em Todas as Páginas (22/10/2026)

- **Commit de referência:** `73ef5dd`
- **Servidor:** `177.104.163.165`, porta SSH `21008`, usuário `alllogiconline`
- **Diretório público:** `/home2/alllogiconline/public_html/`
- **Diretório de backup:** `/home2/alllogiconline/backups/`
- **Pacote utilizado:** `alllogic-site-animations-73ef5dd.tar.gz`
- **SHA-256 do pacote:** `fe879c6ab24dbafb3dcf954202778d3e3ba1c198931a0596620f0326e9bed136`
- **Backup pré-publicação:** `public_html-pre-deploy-20261022-204047.tar.gz` (SHA-256: `edfd358c339424ac61ef32a07a24fcff0fcd2eed2692ecfa9c55431fca6ce672`)
- **Diretório de homologação:** `/home2/alllogiconline/staging-animations-73ef5dd`
- **Validações prévias:** Backup integral criado e validado com `gzip -t` e `tar -tzf`, integridade do pacote checada via SHA-256 remotamente antes de qualquer substituição.
- **Preservação de serviços:** Endpoints `api/diagnosis.php` e `api/affiliates.php` comparados via `cmp -s` e confirmados 100% idênticos; persistência de dados em `api/data/` mantida intocada.
- **Sequência executada:** Suporte e assets compilados (`_astro/`, `images/`) → todas as 10 rotas públicas atualizadas → sitemaps e robots → página inicial (`index.html`) por último.
- **Respostas HTTP:** Retorno `200` confirmado para `/`, `/afiliados/`, `/agilex-atende/`, `/agillex-agenda/`, `/agillex-atendimento/`, `/agillex-hub/`, `/dominios-e-hospedagem/`, `/contato/`, `/sobre/`, `/termos-de-uso/`, `/politica-de-privacidade/` e `/sitemap-index.xml`.
- **Ajustes aplicados:**
  - Animação global de entrada no `<main>` (`pageEntranceFade`) assegurando transição suave em 100% das páginas ao carregar ou navegar.
  - Cascatas contemporâneas de entrada em todos os topos/heroes (`heroEntranceFadeDown`, `heroEntranceFadeUp`, `agillexWindowPop`).
  - Escalonamento harmônico de revelação na rolagem (`scroll-reveal`) em todas as grades e listas de cards com atrasos progressivos de 80ms a 480ms.
  - Elevação e bordas luminosas em hover em todos os cartões interativos do site.
  - Animação de expansão suave nas respostas do FAQ (`faqAnswerFade`) e conformidade total com acessibilidade (`prefers-reduced-motion`).## Registro de referência — Correção da Visibilidade do Painel de Confirmação de Afiliados (22/10/2026)

- **Commit de referência:** `966868b`
- **Servidor:** `177.104.163.165`, porta SSH `21008`, usuário `alllogiconline`
- **Diretório público:** `/home2/alllogiconline/public_html/`
- **Diretório de backup:** `/home2/alllogiconline/backups/`
- **Pacote utilizado:** `alllogic-site-deploy-966868b.tar.gz`
- **SHA-256 do pacote:** `e8c69340f640eea6044a9b04c7ec1a7ec9116e55f02630f5f801281824f05c53`
- **Backup pré-publicação:** `public_html-pre-deploy-20261022-212253.tar.gz` (SHA-256: `0b03fce4ca8a741c07f0aef72f52e880a2bcca861912f5235d8b608a4853510f`)
- **Diretório de homologação:** `/home2/alllogiconline/staging-966868b`
- **Validações prévias:** Backup validado com `gzip -t` e `tar -tzf`, integridade do pacote checada via SHA-256 remotamente antes de qualquer substituição.
- **Preservação de serviços:** Endpoints `api/diagnosis.php` e `api/affiliates.php` comparados via `cmp -s` e confirmados 100% idênticos; persistência de dados em `api/data/` mantida intocada.
- **Sequência executada:** Suporte e assets compilados (`_astro/`, `images/`) → rotas públicas atualizadas → sitemaps e robots → página inicial (`index.html`) por último.
- **Respostas HTTP:** Retorno `200` confirmado para todas as rotas públicas, com confirmação remota da presença de `.affiliates-success-panel.is-hidden{display:none!important}` no CSS compilado.
- **Ajustes aplicados:**
  - Ocultação estrita do card de confirmação com `display: none !important;` e classe `.is-hidden` no carregamento da página `/afiliados/`.
  - Garantia de que a página inicial apresente apenas o formulário limpo, revelando o código e link de parceiro exclusivamente após o envio bem-sucedido dos dados.

## Registro de referência — Reorganização Estratégica dos CTAs na Página de Afiliados (22/10/2026)

- **Commit de referência:** `089d034`
- **Servidor:** `177.104.163.165`, porta SSH `21008`, usuário `alllogiconline`
- **Diretório público:** `/home2/alllogiconline/public_html/`
- **Diretório de backup:** `/home2/alllogiconline/backups/`
- **Pacote utilizado:** `alllogic-site-deploy-089d034.tar.gz`
- **SHA-256 do pacote:** `73571a370664f9b1fc947ecf31ac80db0daa04a40fbca1d7c3188b98c8d0f8c3`
- **Backup pré-publicação:** `public_html-pre-deploy-20261022-213628.tar.gz` (SHA-256: `eaa2516c382b9f317525e68bba50b798b1b0483dad802f21255e76e3877e7c4c`)
- **Diretório de homologação:** `/home2/alllogiconline/staging-089d034`
- **Validações prévias:** Backup validado com `gzip -t` e `tar -tzf`, integridade do pacote checada via SHA-256 remotamente antes de qualquer substituição.
- **Preservação de serviços:** Endpoints `api/diagnosis.php` e `api/affiliates.php` comparados via `cmp -s` e confirmados 100% idênticos; persistência de dados em `api/data/` mantida intocada.
- **Sequência executada:** Suporte e assets compilados (`_astro/`, `images/`) → rotas públicas atualizadas → sitemaps e robots → página inicial (`index.html`) por último.
- **Respostas HTTP:** Retorno `200` confirmado para todas as rotas públicas; ordem sequencial dos IDs no DOM confirmada em produção: `afiliados-hero` → `comissoes` → `diferenciais` → `afiliados-cta` (meio) → `publico-alvo` → `guia-vendas` → `duvidas-frequentes` (FAQ) → `cadastro` (fechamento final).
- **Ajustes aplicados:**
  - Posicionamento do card de CTA intermediário de alto impacto logo após as comissões e benefícios, capturando leads quentes sem rolagem desnecessária.
  - Alocação do formulário de credenciamento como fechamento conclusivo da página, logo abaixo do FAQ, eliminando duplicidade de botões ao final da jornada.



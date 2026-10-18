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




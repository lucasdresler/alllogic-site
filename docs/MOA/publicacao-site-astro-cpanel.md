# Procedimento de Publicação — Site Atlas (Astro/cPanel)

## Ambiente

- Servidor: `177.104.163.165`
- Usuário SSH: `alllogiconline`
- Porta SSH: `21008`
- Diretório público: `/home2/alllogiconline/public_html/`
- Diretório de backups: `/home2/alllogiconline/backups/`
- Artefatos locais: `dist/`
- Estratégia: publicação estática Astro por SSH/SCP.

## Pré-requisitos

1. Consultar `~/AllLogic/AGENTS.md` e `AGENTS.md` do projeto.
2. Verificar `git status`, sincronizar a branch sem descartar alterações e conferir novamente o estado.
3. Executar `npm run build` e validar os artefatos.
4. Identificar precisamente os arquivos gerados que serão publicados.
5. Confirmar acesso SSH e espaço disponível no servidor.
6. Criar um backup integral atual de `public_html` antes de substituir arquivos.

## Backup

Usar um nome exclusivo com data e hora, sem sobrescrever backups anteriores:

```bash
BASE=/home2/alllogiconline
STAMP=$(date +%Y%m%d-%H%M%S)
BACKUP="$BASE/backups/public_html-pre-deploy-$STAMP.tar.gz"
tar -czf "$BACKUP" -C "$BASE" public_html
gzip -t "$BACKUP"
tar -tzf "$BACKUP" >/dev/null
sha256sum "$BACKUP"
```

Registrar caminho, tamanho e SHA-256 do backup na evidência da publicação.

## Transferência e publicação

1. O `rsync` não está disponível no servidor; utilizar `scp` na porta `21008`.
2. Gerar um pacote a partir de `dist/`, sem incluir a pasta local `imagens/` nem arquivos externos ao build.
3. Transferir o pacote para um caminho temporário exclusivo no diretório pessoal do usuário remoto.
4. Conferir o checksum do pacote transferido antes da extração.
5. Extrair o pacote em `public_html` somente depois de confirmar o backup e os caminhos internos do arquivo.
6. Não usar `rsync --delete`, não limpar `public_html` e não remover arquivos que não pertençam ao build.
7. Preservar os arquivos de produção que não façam parte dos artefatos gerados, incluindo integrações existentes que precisem permanecer disponíveis.
8. Remover o pacote temporário somente após validar a publicação.

## Validação pós-publicação

Validar por HTTPS:

- `/`
- `/agillex-agenda/`
- `/sobre/`
- `/contato/`
- `/dominios-e-hospedagem/`
- `/politica-de-privacidade/`
- CSS específico da página Agillex Agenda;
- imagens, navegação, links externos e sitemap;
- endpoint `/api/diagnosis.php`, sem enviar diagnóstico real;
- redirecionamentos, HTTPS e respostas HTTP.

Registrar os resultados e os horários no documento de validação da publicação.

## Rollback

1. Identificar o backup correspondente à publicação.
2. Preservar os logs e evidências da falha.
3. Restaurar o conteúdo do backup com procedimento controlado, sem apagar arquivos externos ao escopo.
4. Validar novamente as rotas e o endpoint de diagnóstico.
5. Registrar a causa, a restauração e o resultado.

Não executar publicação ou rollback quando o backup estiver ausente ou inválido.

## Evidências

Registrar no documento de validação: commit publicado, checksum do pacote, backup utilizado, artefatos substituídos, respostas HTTP e resultado final.

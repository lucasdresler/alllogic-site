#!/usr/bin/env bash
# ==============================================================================
# AllLogic Online - Script Oficial de Deploy: Site Institucional (Projeto Atlas)
# Conforme MOA: publicacao-site-astro-cpanel.md
# Execução padronizada, determinística e compatível com Antigravity Always-Allow
# ==============================================================================

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DIST_DIR="$SCRIPT_DIR/dist"
REMOTE_HOST="alllogic"
REMOTE_BASE="/home2/alllogiconline"
REMOTE_PUBLIC="$REMOTE_BASE/public_html"
REMOTE_BACKUPS="$REMOTE_BASE/backups"
TIMESTAMP="$(date +%Y%m%d_%H%M%S)"
PACKAGE_NAME="dist-$TIMESTAMP.tar.gz"
LOCAL_PACKAGE="/tmp/$PACKAGE_NAME"

echo "🚀 [Deploy] Iniciando publicação do Site Institucional AllLogic Online ($TIMESTAMP)"

cd "$SCRIPT_DIR"

# 1. Build Local da Aplicação Astro
echo "🔨 [1/6] Executando build estático local (Astro)..."
npm run build
if [ ! -d "$DIST_DIR" ]; then
  echo "❌ [Erro] Diretório dist não encontrado após o build."
  exit 1
fi
echo "✅ Build local concluído com sucesso."

# 2. Empacotamento dos Artefatos
echo "📦 [2/6] Gerando pacote compactado para envio..."
tar -czf "$LOCAL_PACKAGE" -C "$DIST_DIR" .
SHA256_LOCAL=$(sha256sum "$LOCAL_PACKAGE" | awk '{print $1}')
echo "✅ Pacote gerado: $LOCAL_PACKAGE (SHA-256: $SHA256_LOCAL)"

# 3. Backup Remoto de Segurança em Produção
echo "🛡️ [3/6] Gerando backup preventivo no servidor remoto ($REMOTE_HOST)..."
ssh "$REMOTE_HOST" "mkdir -p $REMOTE_BACKUPS && tar -czf $REMOTE_BACKUPS/public_html-pre-deploy-$TIMESTAMP.tar.gz -C $REMOTE_BASE public_html && gzip -t $REMOTE_BACKUPS/public_html-pre-deploy-$TIMESTAMP.tar.gz"
echo "✅ Backup remoto salvo e verificado em $REMOTE_BACKUPS/public_html-pre-deploy-$TIMESTAMP.tar.gz"

# 4. Envio do Pacote para Staging no Servidor
echo "📤 [4/6] Enviando pacote para área de staging no servidor..."
scp "$LOCAL_PACKAGE" "$REMOTE_HOST:$REMOTE_BASE/$PACKAGE_NAME"

STAGE_DIR="$REMOTE_BASE/staging-$TIMESTAMP"
ssh "$REMOTE_HOST" "mkdir -p $STAGE_DIR && tar -xzf $REMOTE_BASE/$PACKAGE_NAME -C $STAGE_DIR && rm -f $REMOTE_BASE/$PACKAGE_NAME"
echo "✅ Pacote extraído com sucesso na área de staging."

# 5. Publicação Controlada dos Artefatos em Produção
echo "🔄 [5/6] Atualizando arquivos de produção a partir de staging..."
ssh "$REMOTE_HOST" "
  # Copia arquivos e rotas compiladas preservando dados prévios e APIs
  cp -a $STAGE_DIR/_astro/. $REMOTE_PUBLIC/_astro/ 2>/dev/null || true
  mkdir -p $REMOTE_PUBLIC/images && cp -a $STAGE_DIR/images/. $REMOTE_PUBLIC/images/ 2>/dev/null || true
  cp -a $STAGE_DIR/. $REMOTE_PUBLIC/
  rm -rf $STAGE_DIR
"
rm -f "$LOCAL_PACKAGE"
echo "✅ Arquivos sincronizados em $REMOTE_PUBLIC."

# 6. Validação Pós-Deploy em Produção
echo "🔍 [6/6] Executando validação de resposta HTTP..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" -k "https://alllogiconline.com.br/")

if [ "$HTTP_CODE" = "200" ]; then
  echo "✅ Validação com sucesso! HTTP $HTTP_CODE ativo em https://alllogiconline.com.br/"
  echo "🎉 Deploy do Site Institucional finalizado com êxito!"
else
  echo "⚠️ Alerta: HTTP Code = $HTTP_CODE em https://alllogiconline.com.br/"
fi

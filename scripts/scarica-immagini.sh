#!/usr/bin/env bash
# Scarica le immagini dal sito attuale www.toffenetti.it nelle cartelle del nuovo sito.
# Uso: bash scripts/scarica-immagini.sh
set -euo pipefail
cd "$(dirname "$0")/.."
while read -r dest url; do
  [ -z "$dest" ] && continue
  mkdir -p "$(dirname "$dest")"
  if curl -fsSL --retry 3 -o "$dest" "$url"; then echo "ok  $dest"; else echo "ERR $url"; fi
done < scripts/immagini.txt

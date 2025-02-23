#!bin/bash

npm install -g @line/liff-cli

npx @line/create-liff-app

liff-cli app create \
  --channel-id 1234567890 \
  --name "Brown Coffee" \
  --endpoint-url https://example.com \
  --view-type full
Successfully created LIFF app: 1234567890-AbcdEfgh

#!/usr/bin/env sh

# Abort on errors
set -e

# Build
npm run build

# Navigate into the build output directory
cd build

git init
git add -A
git commit -m 'deploy'

# Push to Primary Server
git push -f company-test:/home/ubuntu/deploy/app.git master

cd -

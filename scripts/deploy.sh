#!/usr/bin/env sh

# 发生错误时终止
set -e

npm run build

cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:Rain120/memory.git main:gh-pages

cd -

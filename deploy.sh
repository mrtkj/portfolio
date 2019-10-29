# エラー
set -e

# build
npm run build

# 出力されたディレクトリに移動
cd dist

# カスタムドメインにデプロイする場合
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# https://<USERNAME>.github.io にデプロイする場合
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# https://<USERNAME>.github.io/<REPO> にデプロイする場合
git push -f git@github.com:mrtkj/portfolio.git master:gh-pages

cd -
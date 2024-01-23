# contenteditable_example

contenteditableを理解するためのコードサンプル

## 環境構築

- docker-composeで作成した
  - 参考：https://github.com/miolab/vue_container

## 使い方

- `docker-compose up -d`
  - で、vue-cliが起動する（はず）
- `docker exec -it contenteditable_example-app-1 /bin/sh`で、コンテナの中に入って`yarn serve`でサーバ起動
  - 初回だけは`yarn install`が必要
  - OSはAlpine
- localhost:8080で立っているはず

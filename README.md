# Dubian-Path-Sample

## ローカル確認

```bash
node scripts/smoke.test.js
```

## GitHub Pages で公開する手順

1. リポジトリの `Settings` → `Pages` を開く。
2. `Build and deployment` の `Source` で **GitHub Actions** を選ぶ。
3. `main`（または `master`）へ push すると、`.github/workflows/deploy-pages.yml` により自動デプロイされる。
4. デプロイ完了後、`https://<ユーザー名>.github.io/<リポジトリ名>/` で表示できる。

> 初回だけ Pages の有効化が必要です。以降は push のたびに更新されます。

## 公開URL

https://woodencaliper.github.io/Dubian-Path-Sample/

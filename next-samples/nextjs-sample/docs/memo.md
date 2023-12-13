```sh
# --no-app means this project is set up with Pages Router
npx create-next-app@latest nextjs-sample --no-app --no-tailwind
```

- CSS module
  - `xxx.module.css`
  - 生成されたクラス名はユニークなものとなっており**スコープを汚染しない**
- JAMStack
  - JavaScript
  - API
  - Markup

```sh
npm install @notionhq/client

npm install dayjs
```

- [prismjs](https://prismjs.com/)
  - Dead Simple!

``` sh
npm install prismjs babel-plugin-prismjs
npm install --save-dev @types/prismjs
```

- Link コンポーネント
  - 擬似的なページ遷移
  - 差分の js, CSS ファイルだけを取得可能
  - cf.
    - **通常の a タグを使った繊維では、アプリケーション全体を動作させる js を再度取得することになる！**
- React コンポーネントの型は FunctionComponent で定義

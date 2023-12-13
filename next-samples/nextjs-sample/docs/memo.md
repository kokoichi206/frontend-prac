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
- ISR: Incremental Static Regeneration
  - 各ページは SSG でページ内容を表示している
  - **→ ビルド時に Notion API から情報を取得しているため Notion を更新しても内容が反映されない**
  - **解決するために ISR という機能がある**
    - getStaticProps の戻り値オブジェクトに revalidate を含める！
    - https://nextjs.org/docs/pages/api-reference/functions/get-static-props#revalidate
  - build しないとわからない！
    - run dev ではわからない

``` sh
npm run build
npm run start
```

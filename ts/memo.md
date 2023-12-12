- プリミティブ型と違って**オブジェクトを代入した変数は常に参照として振る舞う！**
- 配列も参照として振る舞う
  - const 宣言していても要素の変更されうる
- boolean 以外にも truthy, falsy なものが存在する
  - **falsy な値の例**
    - **null, undefined, 0**
- Null 合体演算子 (??)
- 三項演算子: ternary operator

``` sh
npm install -g typescript
tsc index.ts
node index.js
```

- when to use intersection type?
- モジュール
  - ECMAScript/TypeScript にはコードをモジュール化してファイルを分割できる
  - ES Modules
    - **ECMAScript の標準仕様**
  - CommonJS
    - **Node.js の仕様として実装されたモジュールシステム**
    - Node.js で ES Modules を実行するには CommonJS に変換が必要
      - モジュールバンドラの登場！
- Promise
  - pending, fulfilled, rejected
- react
  - JSX による宣言的な UI の実装
  - 副作用
    - 状態の変化に合わせて、サイレンダリング以外の副次的な処理ができる
  - SPA
    - 初期表示遅れがち
    - ルーティングが多少煩雑
- nextjs
  - routing
    - Pages Router
    - From Next.js 13 -> App Router
  - SSR/SSG
    - **この辺は Next.js が自動で使い分ける**
  - ファイルベースルーティング

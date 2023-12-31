## 歴史

- js: 1995 登場
  - 初期の頃はブラウザ上では重く、不人気
- jQuery
  - 画期的な点
    - クロスブラウザ
    - DOM の操作が簡単
    - アニメーションが容易
    - jQuery UI などの周辺ライブラリの充実
  - 人気がなくなってきた理由
    - グローバルスコープを汚染する
    - DOM 捜査の実装が複雑になりやすい
    - ルーティングなど、複数ページでの実装する仕組みがない
    - ブラウザ間の挙動の違いが以前よりも顕著ではなくなり、ブラウザ互換コードが不要になってきた！！
      - へえ
      - ブラウザの標準化

### SPA

- 起動時に一度 HTML 全体をロードし、以降は Ajax で情報を取得する
  - 高速な UI の動作
- SPA 以前は、Rails, Struts などのように、フレームワークのテンプレートで HTML を表現してた
- メリット
  - ハイパフォーマンス
  - サーバーサイドエンジニアとフロントエンドエンジニアの分業が容易
  - JSON API による疎結合な設計
    - クライアントを特定のアプリに限定しない
- デメリット
  - js の読み込みとレンダリングが発生する
    - 対策しないと、初期表示に少し時間がかかる
    - ？？
    - Next.js では解決してるらしい
  - フロントの学習コストが高い
  - フロントのコード量が多くなる
- SPA を支える技術
  - URL パスと View のルーティング管理
  - クライアント再度でのブラウザ履歴管理によるページ遷移
  - 非同期によるデータ取得
  - View のレンダリング
  - モジュール化されたコードの管理
- History API
  - HTML5 で登場
  - ページの遷移・**履歴**を js で扱えるようになった！
    - https://developer.mozilla.org/ja/docs/Web/API/History_API
    - `window.history.back();`
    - `window.history.pushState({name : 't-okushima'}, null, '/name')`
- 2015 頃まで、フレームワークの乱立
  - MVC, MVVM など

### React

- 特徴
  - 仮想 DOM
  - 宣言的 UI
  - 単一方向のデータの受け渡し
  - コンポーネント指向・関数コンポーネント
  - Flux アーキテクチャとの親和性
- Flux
  - AngularJS などの MVVM フレームワークが持つ、双方向データバインディングの機能への問題提起
    - Facebook
- Redux
  - Flux の発展系
- Node.js
  - ノンブロッキング I/O が特徴
  - js, ts でのサーバーサイドの実装

### AltJS

- コンパイルすることで js が生成されるプログラミング言語
  - トランスパイル
- れい
  - ts
  - CoffeeScript
  - ClojureScript
  - Dart

### Babel

- ES6 などんほ仕様の js を読み込み、まだ標準実装されてないブラウザ向けに ES5 の形式で出力するため
- ビルドシステム
  - モジュールの依存を解決し、実行可能な js の形式に変換する
- フロントエンドの複雑化
  - AltJS のトランスパイル
  - SCSS の CSS への変換
  - 画像の圧縮
  - デプロイ
- webpack の利点
  - 依存 module のバージョン管理と解決の自動化
  - ファイルの結合やコードの圧縮などの自動化
  - プラグインによるカスタマイズ
  - ホットリロードなど開発の効率化ツールの

### SSR/SSG

- SPA
  - クライアントサイドレンダリングで、対策をしないと初期表示が遅い
- SSR
  - サーバーサイドでレンダリングを行うため、サイト表示の高速化
  - サーバーサイドでコンテンツを生成するため、SPA では難しかった SEO を向上させることが可能
- SSG: Static Site Generation
  - 事前に静的ファイルとして生成しデプロイ

### Next.js

- pros
  - React に加え SSR, SSG
  - webpack の設定の隠蔽！
  - ディレクトリベースの自動ルーティング機能
  - コードの分割・統合
- 思想
  - クライアントとサーバー間でコードを共有できるユニバーサルな js アプリケーション
- レンダリング関数とコンポーネントライフサイクル
  - React の特徴

### component

- useState
  - React Hooks の1つ
  - コンポーネントの state の値を更新する

### props

- props によるバケツリレー問題の解決
  - Flux
  - Context
    - props によるバケツリレーを避けることが目的

### Atomic Design

- post
  - c
- 大雑把に
  - Atomic
    - UI の最小
    - ボタンなど
  - Molecules
    - 検索フォームなど
  - Organisms
    - ヘッダーなど
  - Template
    - 1つの画面として成り立つもの
  - Pages
    - Template に、アプリケーションとしてづおさするデータが注ぎ込まれたもの

### Vue.js?

- vue.js
  - 設計思想
    - 小規模から大規模まで段階的に使えるプログレッシブフレームワーク
  - 個人のエンジニアがリード
    - react は facebook

### Hydration

- SSR/SSG リクエスト時の話
- 静的な HTML として表示した後、Hydration される
  - 動的な React アプリケーションとして動作
- Hydration には js の読み込みが必要
  - ページ初期化時の HTML 表示と js の実行タイミングに差が生じてしまう

### JSX

- JavaScript を拡張した構文
- ビルド時に純粋な JS へと変換される
- webpack によって、JavaScript のコードに変化なsれる
  - JSX で実装したコンポーネントは、JS のオブジェクトとして表現される
- 仮想 DOM はメモリ上に保存された模式的な DOM ツリーのこと
- 仮想 DOM
  - https://ja.legacy.reactjs.org/docs/faq-internals.html

### コンポーネント

- 関数コンポーネント > クラスコンポーネント
- React Hooks の導入（React16.8）

### 型

- JSX.Element を返す関数
  - 型注釈により、親コンポーネントから与えることのできる方を制限できる！！！

### React Hooks

- Hook によって関数コンポーネント中で状態やライフサイクルを扱うための機能
- 公式で提供しているフックは10種類ある
- カスタムフックも実装可能
- 公式: 状態のフック
  - useState
  - useReducer
    - 配列やオブジェクトなどの複数のデータをまとめたり
  - useCallback, useMemo
    - 値や関数を保持し、必要のない子要素のレンダリングや計算を抑制する
- ref
  - データの保持
    - 再描画は走らない
      - useState, useReducer は状態が更新されるたびに再描画が発生！
  - DOM の参照
    - ref をコンポーネントに渡すと、この要素がマウントされた時、ref.current に DOM の参照がセットされる

## Unit test

- React Testing Library
  - DOM Testing Library を使っている

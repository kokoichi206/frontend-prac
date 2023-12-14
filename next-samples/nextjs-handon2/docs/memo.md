```sh
❯ npx create-next-app@latest nextjs-handon2 --app --tailwind
✔ Would you like to use TypeScript? …  / Yes
✔ Would you like to use ESLint? …  / Yes
✔ Would you like to use `src/` directory? …  / Yes
✔ Would you like to customize the default import alias (@/*)? … No / 
```

- Unsplash
  - api
    - https://unsplash.com/oauth/applications
  - [get random photos](https://unsplash.com/documentation#get-a-random-photo)

``` sh
npm install react-icons
```

- tailwind
  - `w-[1200px] mx-auto`
    - 幅 1200px の中央寄せ
  - `last:mb-0`
    - 親要素の、最後の子要素だけ mb-0 の設定
- CSS
  - [backdrop-filter](https://developer.mozilla.org/ja/docs/Web/CSS/backdrop-filter)
- next/font
  - ビルド時に web フォントを埋め込むことで初回描画時から安定して表示させる

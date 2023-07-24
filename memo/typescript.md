## 型エイリアス

- 型の定義に名前をつける
  - 型名は大文字始まりにすることガイパン的

``` ts
type Name = string

type Point = {
    x: number;
    y: number;
}

type Formatter = (a: string) => string
```

## インタフェース

- 型エイリアスと似ているが、拡張性が高い。
- インタフェースはクラスやデータの一側面を定義した型
  - **インタフェースにマッチする型でも、その型意外に他のフィールドやメソッドがある前提！！！**
- cf:
  - **型エイリアスはオブジェクトそのもの！！！**

``` ts
interface Point {
    x: number;
    y: number;
}

// 後から拡張可能。。。
interface Point {
    // ? でオプショナルな変数として定義。
    z?: number;
}

class MyPoint implements Point {
    x: number;
    y: number;
}
```

## enum

js にない、ts 独自のもの

``` ts
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}
```

## union と intersection

- Union: 和集合
  - |
- Intersection: 積集合
  - &

## リテラル型

- `|` でデータを区切るリテラル型
- 決まった文字列や数値しか入らない型、という制御が可能
- union と違うんだっけ

## never

**if, switch で条件分岐漏れがないかの確認！！！**

``` ts
enum PageType {
    ViewProfile,
    EditProfile,
}

const getTitle = (type: PageType) => {
    switch(type) {
        case PageType.ViewProfile:
            return 'Setting'
        case PageType.EditProfile:
            return 'Edit'
        default:
            // 決して起きないことをコンパイラに伝えるために never に代入する。
            const wrongType: never = type
            throw new Error(`${wrongType} is not a pagetype`)
    }
}
```

## tips

- optional chaining
- non-null assertion operator
- 型ガード
- readonly
  - オブジェクト・クラスのプロパティに対して宣言
- Prettier
  - format
- ESLint
  - lint
- option
  - noImplicitAny
  - strictNullChecks

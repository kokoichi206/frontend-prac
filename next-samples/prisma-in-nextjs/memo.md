## prisma

``` sh
npx prisma init --datasource-provider sqlite
```

- めっちゃいいな
  - `@updatedAt`
  - db push の試しながら進める感じ
    - prototyping
  - `npx prisma studio`
  - connectOrCreate
    - seed 以外で使う場面ある？あるか
  - pulse
    - 気になるので後で触ってみる
    - https://www.prisma.io/pulse

### migration

``` sh
npx prisma migrate dev --name init
```

### memo

- official documentation
  - [Pagination](https://www.prisma.io/docs/orm/prisma-client/queries/pagination)
  - [seed](https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding)
  - [Caching](https://www.prisma.io/docs/accelerate/caching)

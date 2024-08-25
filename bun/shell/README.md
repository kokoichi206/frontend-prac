# Bun shell

- https://bun.sh/guides/runtime/shell
- https://bun.sh/docs/runtime/shell

``` sh
bun run scripts/foo.ts

# ビルドして実行可能モジュールとして生成する。
bun build scripts/foo.ts --compile --outfile foo

$ ls -lh foo
-rwxrwxrwx  1 kokoichi  staff    53M Aug 25 00:20 foo
```

import { $ } from "bun";

// エイリアスが影響しないように command を使って直接システムの ls を呼び出す。
const output = await $`command ls`.text();
console.log(output);

for await (const line of $`/bin/ls -l`.lines()) {
  console.log(line);
}

const buffer = Buffer.alloc(1024);
await $`echo "pigepige" > ${buffer}`;
console.log(buffer.toString());

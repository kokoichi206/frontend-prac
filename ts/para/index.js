function foo() {
  console.log("===== foo =====: ", Date.now());

  setTimeout(foo, 250);
}

let last = 0;
function bar() {
  const start = Date.now();
  // 現在時刻をミリ秒で表示する。
  if (last > 0) {
    console.log("interval: ", start - last, " ms");
  }

  let sum = 0;
  for (var i = 0; i < 1_000_000_000; i++) {
    sum += i;
  }
  //   console.log("===== end =====", Date.now());
  last = Date.now();
  console.log("exec time: ", last - start, " ms");

  setTimeout(bar, 300);
}

// setInterval(foo, 300);
// setInterval(bar, 300);

setTimeout(foo, 100);
setTimeout(bar, 300);

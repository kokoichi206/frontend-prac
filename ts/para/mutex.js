let f = {
  x: 1,
};

function foo() {
  f.x += 1;
  console.log("f: ", f);
}

function consumeTimeLocal() {
  let sum = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    sum += i;
  }
}

async function consumeTimeAsync() {
  const reponse = await fetch("https://github.com/kokoichi206");
  if (reponse.ok) {
    console.log("fetch failed ...");
  }
}

async function bar() {
  console.log("bar called");
  const localX = f.x;
  const localF = f;

  consumeTimeLocal();
  // await consumeTimeAsync();

  if (localX !== localF.x) {
    console.log(`f.x changed! (localX=${localX}, localF.x=${localF.x})`);
  }
}

setInterval(foo, 30);
setInterval(bar, 120);

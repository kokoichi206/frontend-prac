let count = 0;

const counter = document.getElementById("counter");
const countAddBtn = document.getElementById("add");
const countSubBtn = document.getElementById("sub");

countAddBtn.addEventListener("click", () => {
  console.log("add button click");
  count++;
  counter.innerHTML = count;
});

countSubBtn.addEventListener("click", () => {
  console.log("sub button click");
  count--;
  counter.innerHTML = count;
});

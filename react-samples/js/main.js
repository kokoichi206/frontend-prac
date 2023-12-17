if (true) {
  var x = 10;
}
console.log(x);

// if (true) {
//   let y = 10;
// }
// // ReferenceError: y is not defined
// console.log(y);

// 同値であるが、積極的に活用すべき！
// - プロパティとメソッドが明確に区別可能
// - class 構文の記法と一貫性がある
const member = {
  name: "me",
  greet() {
    console.log(`hi: ${this.name}`);
  },
};
// const member = {
//   name: "me",
//   greet: function () {
//     console.log(`hi: ${this.name}`);
//   },
// };

// 分割代入。
const list = [10, 20, 30];
const [one, ...rest] = list;
console.log(one, rest);

function sum(...nums) {
  let result = 0;
  for (const num of nums) {
    result += num;
  }
  return result;
}

// 01,2,3
console.log(sum([1, 2, 3]));
// 6
console.log(sum(...[1, 2, 3]));

let str = null;
// undefined
console.log(str?.substring(1));
// default
console.log(str ?? "default");
// null
console.log(str);
str ??= "default";
// default
console.log(str);

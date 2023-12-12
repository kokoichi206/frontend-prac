// =========== type ===========
// null と undefined はそれぞれのプリミティブ型の値である。
var obj1 = {};
// 存在しないプロパティの値が undefined.
console.log(obj1.prop1);
var obj2 = {
    prop2: null,
};
// プロパティの**値**が存在しないことを示すのが null.
console.log(obj2.prop2);
var obj3 = {
    numProp: 0,
};
// 分割代入。
var numProp = obj3.numProp, strProp = obj3.strProp;
console.log(numProp);
console.log(strProp);
var strList = ['a', 'b', 'c'];
strList.forEach(function (str, index) {
    console.log(str, index);
});
var value = 1;
// 1
console.log(100 && value);
// 1000
console.log(1000 || value);
// ====== can evaluate with 2 different types ======
// 1
console.log('foo' && value);
// foo
console.log('foo' || value);
// null or undefined are not evaluated.
console.log(null !== null && null !== void 0 ? null : 'default');
console.log(undefined !== null && undefined !== void 0 ? undefined : 'default');
// 0
console.log(0 !== null && 0 !== void 0 ? 0 : 'default');
var cond = true;
var ternary = cond ? 'true' : false;
// type of ternary
console.log(typeof ternary);

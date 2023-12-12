// =========== type ===========
// null と undefined はそれぞれのプリミティブ型の値である。
const obj1: any = {}
// 存在しないプロパティの値が undefined.
console.log(obj1.prop1)
const obj2 = {
    prop2: null,
}
// プロパティの**値**が存在しないことを示すのが null.
console.log(obj2.prop2)

const obj3: {
    numProp: number;
    // ? はオプショナルなプロパティを表し、undefined が許容される。
    strProp?: string;
} = {
    numProp: 0,
}

// 分割代入。
const { numProp, strProp } = obj3
console.log(numProp)
console.log(strProp)

const strList: string[] = ['a', 'b', 'c'];
strList.forEach(function (str, index) {
    console.log(str, index)
});

const value = 1;
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
console.log(null ?? 'default');
console.log(undefined ?? 'default');
// 0
console.log(0 ?? 'default');

const cond = true;
const ternary = cond ? 'true' : false;
// type of ternary
console.log(typeof ternary);

console.log('======== type definition ========');
type NewType = number;
type SpecificStringLiteral = 'string';
type NewObj = {
    numProp: number;
    strProp?: string;
};
type FuncType = (arg:number) => boolean;

console.log('====== union type ======');
type UnionType = string | number;

let myMap = new Map();

// 字符串作为键位
let string = "a string";

myMap.set(string, "和 'a string'关联的值")

console.log(myMap.get(string));// "和键'a string'关联的值"

console.log(myMap.get("a string"));// "和键'a string'关联的值"


// 对象作为键位
let obj = {};

myMap.set(obj, "和obj相关的值");

console.log(myMap.get(obj)); //和obj相关的值
console.log(myMap.get({}));  //undefined 因为{} !== {}


// 函数作为键位
let fun = function () { }

myMap.set(fun, "和fun相关的值");

console.log(myMap.get(fun)); //和fun相关的值
console.log(myMap.get(function () { }));//undefined 因为 keyFunc !== function () {}


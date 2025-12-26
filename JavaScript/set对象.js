let mySet = new Set();

mySet.add(1);  //添加数字
mySet.add(2);
mySet.add("3"); //添加字符串
mySet.add({ a: 4, b: 5 }); //添加对象

console.log(mySet.size); //Set元素个数
console.log(mySet); // { 1, 2, 3, {a: 4, b: 5}}


// 将Set转化成Array
let myArray = [...mySet];


// 将Array转化为Set
let arrSet = new Set(myArray);


// Set数组去重
let mySet1 = new Set([1, 2, 3, 3, 4]);
let setArray = [...mySet1];
console.log(setArray); //[1,2,3,4]



let set1 = new Set([1, 2, 3]);
let set2 = new Set([2, 3, 4]);
// Set合并
let merged = new Set([...set1, ...set2]); //[1,2,3,4]
// Set交集
let intersect = new Set([...set1].filter(x => set2.has(x)));//[2, 3]
//Set差集
let diff = new Set([...set1].filter(x => !set2.has(x)));// [1]
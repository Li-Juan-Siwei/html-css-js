//从数组和对象中一次提取多个值,并赋值给多个变量

let [a, b, c] = [1, 2, 3];

let { name, age } = { name: "username", age: 18 };

// 可嵌套

let [A, [B, C]] = [1, [2, 3]];

let [d, ...e] = [1, 2, 3];

console.log(e);

let [a1, a2, a3, a4, a5] = "hello";
console.log(a1);

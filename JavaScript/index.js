var num1 = 1;
let num2 = 2;
const num3 = 3;

function fun() {
    if (true) {
        var x = "函数作用域";
    }
    console.log(x);   //函数作用域
}
fun();

// function fun2() {
//     if (true) {
//         let x = "x是块级作用域"
//         const y = "y是块级作用域"
//     }
//     console.log(x);
//     console.log(y);
// }
// fun2();
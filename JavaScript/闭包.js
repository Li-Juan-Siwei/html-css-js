function fun() {
    let num = 100;
    function fun2() {
        console.log(num);
        num++;
    }
    return fun2;
}

const myClosure = fun();
const myClosure2 = fun();
const myClosure3 = fun();
myClosure(); //100
myClosure(); //101 没有被回收, num会计数
myClosure2(); //100 重新产生实例
myClosure3(); //100 重新善生实例

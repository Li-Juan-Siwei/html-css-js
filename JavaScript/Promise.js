// 
let promise = new Promise(function (resolve, reject) {
    let bool = Math.random() > 0.5;

    if (bool) {
        setTimeout(() => resolve("成功"), 1000)

    } else {
        setTimeout(() => reject("失败"), 2000)
    }
})

promise.then(result => {
    console.log(result);
    throw ("失败");
}).catch(error => {
    console.log(error);
})
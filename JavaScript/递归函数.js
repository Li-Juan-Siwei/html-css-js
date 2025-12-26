// 计算n!

let result = function timeN(num) {
    if (num <= 1) {
        return 1;
    }
    return num * timeN(num - 1);

}(10)

console.log(result);

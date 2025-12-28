function delay(ms) {
    return new Promise(reject => {
        setTimeout(() => reject("失败!"), ms)
    })
}

//方案一使用: async 和 await
async function main() {
    const result = await delay(3000); //await delay()是reject()的值 
    console.log("1秒后执行");
    console.log(result);  // 输出 "失败!"
}

main();  // 调用函数

//方案二使用: .then() 
function main1() {
    const promise = delay(3000); //delay()是pening状态的Promise
    result.then(result => {
        console.log("1秒后执行");
        console.log(result);  // 输出 "失败!"
    })
}
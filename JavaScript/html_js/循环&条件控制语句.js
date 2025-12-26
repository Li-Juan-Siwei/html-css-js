//if条件控制语句
let num = Math.random();

if (num > 0.5) {
    console.log("num大于0.5:" + (num - 0.5));
} else {
    console.log("num小于0.5:" + num);

}

//switch 条件控制语句
let date = new Date();
let day = date.getDay() % 7

switch (day) {
    case 1: console.log("星期一"); break;
    case 2: console.log("星期二"); break;
    case 3: console.log("星期三"); break;
    case 4: console.log("星期四"); break;
    case 5: console.log("星期五"); break;
    case 6: console.log("星期六"); break;
    case 0: console.log("星期日"); break;
}


// 循环语句for
for (let i = 0; i < 5; i++) {
    console.log("i=" + i);
}

//循环语句while
let j = 0;
while (j < 5) {
    console.log("j=" + j);
    j++;
}


//循环语句do-while
let i = 0;
do {
    console.log("i=" + i);
    ++i;
} while (i < 5);
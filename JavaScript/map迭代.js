var myMap = new Map();

myMap.set(0, "零");
myMap.set(1, "壹");

for (let [key, value] of myMap) {
    console.log(key + ":" + value); //0:零 1: 壹
}

for (let key of myMap.keys()) {
    console.log(key);
}

for (let value of myMap.values()) {
    console.log(value);

}
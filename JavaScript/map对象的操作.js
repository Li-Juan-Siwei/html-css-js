// Map与Array的相互转换
let mapArray = [["key1", "value1"], ["key2", "value2"]];

// 将Array转换成Map
let myMap = new Map(mapArray);

// 将Map转换成Array
let convertArray = Array.from(myMap);


// Map的克隆
let myMap1 = new Map([["key1", "value1"], ["key2", "value2"]]);

let copyMap = new Map(myMap1);


// Map的合并
let myMap2 = new Map([["key1", "value1"], ["key2", "value2"]]);
let myMap3 = new Map([["key3", "value3"], ["key4", "value4"]]);

let merged = new Map([...myMap2, ...myMap3]);

for (let [k, v] of merged) {
    console.log(k + ":" + v);

}
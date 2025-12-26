let myMap = new Map();

myMap.set(0, "零");
myMap.set(1, "壹");

myMap.forEach(
    function (value, key, map) {
        console.log(map + "=" + key + ":" + value);
    }
);
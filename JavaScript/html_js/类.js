class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.fun = function () {
            console.log("name:" + this.name + "," + "age:" + this.age);
        }
    }

    fun1(surname) {
        console.log("家族姓氏:" + surname);
    }

    static fun2(height) {
        console.log("人类平均身高:" + height);
    }
}



class Parent {
    constructor(name) {
        this.name = name; // 父类属性
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name);  //调用父类构造函数
        this.age = age;  // 子类属性
    }
}


class Person {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this.name;
    }

    set name(newName) {
        this.name = newName;
    }
}

const p = new Person("张三丰");
console.log(p.name); //调用get
p.name = "张无忌";   //调用set
console.log(p.name);


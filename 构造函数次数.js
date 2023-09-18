/* 
写一个构造函数Foo，该函数每个实例为一个对象，形如{id:N},其中N表示第N次调用得到的。
要求：
1、不能使用全局变量
2、直接调用Foo()也会返回实例化的对象
3、实例化的对象必须是Foo的实例
 */

// 闭包
const Foo = (function () {
    let count = 0
    function Foo() {
        if (!(this instanceof Foo)) {
            return new Foo()
        }
        count++
        this.id = count
    }
    return Foo
})()
console.log(Foo)
const foo1 = new Foo();
console.log(foo1); // { id: 1 }

const foo2 = new Foo();
console.log(foo2); // { id: 2 }

const foo3 = Foo();
console.log(foo3); // { id: 3 }

Function.prototype.myapply = function (obj,args) {
    if (typeof obj !== 'object') {
        throw new TypeError('Type error')
    }
    const symbol = Symbol()
    obj = obj ? obj : window
    obj[symbol] = this
    const res = obj[symbol](...args)
    delete obj[symbol]
    return res
}

let aaa = { name: 'abc' }
function myname(str) {
    console.log(this[str])
}
myname.myapply(aaa,['name'])
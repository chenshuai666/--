function createObj(obj, ...args) {
    if (typeof obj !== 'function') {
        throw new TypeError('Type Error')
    }
    const newObj = Object.create(obj.prototype)
    const res = obj.apply(newObj, args)
    return typeof res === 'object' ? res : newObj
}

function Person(name) {
    this.name = name
    return {}
}
console.log(createObj(Person, 'bbb'))
console.log(new Person('bbb'))
import { isObject } from "./utils.js"
import { handlers } from "./handlers.js"

//对象字典
const targetMap = new WeakMap()

export function reactive(raw) {
    if (!isObject(raw)) {
        return raw
    }
    if (targetMap.has(raw)) {
        return targetMap.get(raw)
    }
    const proxy =  new Proxy(raw, handlers)
    targetMap.set(raw, proxy)
    return proxy
}



// const test = reactive({ name: 'aaa' })
// test.name

// const obj = {}
// console.log(obj.name='bbb')

// if ('') {
//     console.log('ccc')
// }
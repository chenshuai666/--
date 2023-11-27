import { track, trigger } from "./effect.js"
import { reactive } from "./reactive.js"
import { isObject } from "./utils.js"

export const handlers = {
    get(target, key, reciever) {
        track(target, key)
        const result = Reflect.get(target, key, reciever)
        if (isObject(result)) {
            return reactive(result)
        }
        return result
    },
    set(target, key, value, reciever) {
        const result = Reflect.set(target, key, value, reciever)
        trigger(target, key)
        return result
    }
}
import { effect } from "./effect.js";
import { reactive } from "./reactive.js";

const obj = {
    a: 1,
    b: 2,
    c: 3
}
const state1 = reactive(obj)

function fn() {
    console.log('fn')
    if (state1.a === 1) {
        state1.b
        // console.log('b')
    } else {
        state1.c
        // console.log('c')
    }
}

effect(fn)

state1.a = 2
// console.log(state1)
const targetMap = new WeakMap()
let activeEffect = undefined

export function cleanup() {
    const { deps } = activeEffect
    console.log(deps)
    if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
            deps[i].delete(activeEffect)
        }
        deps.length = 0
    } 
}

export function track(target, key) {
    console.log('track')
    if (!activeEffect) {
        return
    }
    if (!targetMap.has(target)) {
        targetMap.set(target, new Map())
    }
    const propMap = targetMap.get(target)
    if (!propMap.has(key)) {
        propMap.set(key, new Set())
    }
    const dep = propMap.get(key)
    if (!dep.has(activeEffect)){
        dep.add(activeEffect)
        activeEffect.deps.push(dep)
    }
    // console.log(activeEffect.deps)
}

export function trigger(target, key) {
    const sets = targetMap.get(target)?.get(key)
    for (let set of sets) {
        console.log('set')
        set()
    }
}

export function effect(fn) {
    const effectFn = () => {
        console.log('ccc')
        activeEffect = effectFn
        // cleanup()
        fn()
        activeEffect = null
    }
    effectFn.deps = []
    effectFn()
}
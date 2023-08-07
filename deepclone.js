const deepclone = (target, wm = new WeakMap()) => {
    if (typeof target !== 'object' || target === null) {
        return target
    }
    if (wm.has(target)) return wm.get(target)
    const cloneTarget = Array.isArray(target) ? [] : {}
    if (Array.isArray(cloneTarget)) {
        for (let item in target) {
            cloneTarget[item] = deepclone(target[item])
        }
    } else {
        for (let prop of Object.getOwnPropertyNames(target)) {
            cloneTarget[prop] = deepclone(target[prop])
        }
        for (let symprop of Object.getOwnPropertySymbols(target)) {
            cloneTarget[symprop] = target[symprop]
        }
    }
    return cloneTarget
}
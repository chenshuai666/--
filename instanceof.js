function _instanceof(ins, cons) {
    if (typeof cons !== 'function') {
        throw new Error(`Right-hand side of 'instanceof' is not an object`)
    }
    if (typeof ins !== 'object' || ins === null) {
        return false
    }
    while (ins) {
        ins = Object.getPrototypeOf(ins)
        if(ins === cons.prototype) return true
    }
    return false
}


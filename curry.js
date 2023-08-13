function curry(fn, ...args) {
    return fn.length >= args.length ? curry.bind(null, fn, ...args) : fn(...args)
}
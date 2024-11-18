function curry(fn, ...args) {
  console.log(...args);
  return fn.length > args.length ? curry.bind(null, fn, ...args) : fn(...args);
}

function mycurry(fn, ...args) {
  return fn.length > args.length ? curry(fn, ...args) : fn(...args);
}

function foo(a, b, c) {
  console.log(a + b + c);
}

const test = curry(foo);
test(1);
test(2)(3);
test(1)(2)(3);

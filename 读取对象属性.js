function getProp(obj, str) {
  let res = obj;
  for (let propName of str.split(".")) {
    res = res[propName];
  }
  return res;
}

var obj = { a: { b: { c: 2 } } };
console.log(getProp(obj, "a.b.c")); // 输出 2

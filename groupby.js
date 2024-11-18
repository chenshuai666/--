Array.prototype.groupby = function (fn) {
  const obj = {};
  for (let item of this) {
    const res = fn(item);
    if (!obj[res]) obj[res] = [];
    obj[res].push(item);
  }
  return obj;
};

const array = [0, 1, 2, 3, 4];

const ruleFn = (item, index, array) => {
  return item % 2 === 1 ? "odd" : "even";
};

const res = array.groupby(ruleFn);
console.log(res);

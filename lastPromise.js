function wrapper(promiseFn) {
  let id = 0;
  return function () {
    return new Promise(function (resolve, reject) {
      const cur = ++id;
      promiseFn().then((res) => {
        if (cur === id) {
          resolve(res);
        }
      });
    });
  };
}

let count = 0;
function sendRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(++count);
    });
  });
}
let newWrap = wrapper(sendRequest);
newWrap().then(console.log);
newWrap().then(console.log);
newWrap().then(console.log);

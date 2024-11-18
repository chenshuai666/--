const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  #state = PENDING;
  #value = undefined;
  #fulfilledQueue = [];
  #rejectedQueue = [];
  // #reason = undefined

  constructor(executor) {
    const resolve = (data) => {
      this.#changeState(FULFILLED, data);
      // console.log("resolve: " + data);
    };
    const reject = (reason) => {
      this.#changeState(REJECTED, reason);
      // console.log("reject: " + reason);
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  #changeState(state, value) {
    if (this.#state !== PENDING) return;
    this.#state = state;
    this.#value = value;
  }

  then(onFulfilled, onRejected) {}
}

const p = new Promise((res, rej) => {
  res(1);
})
  .then(() => 2)
  .then((res) => console.log(res));

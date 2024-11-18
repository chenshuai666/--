import { URL, fileURLToPath } from "node:url";

export default { aa: "aaa", bb: "bbb" };
// console.log(__dirname);

setTimeout(() => {
  a = 2;
}, 5000);

export let a = 1;

// console.log(URL, fileURLToPath);
export function filename(url) {
  return fileURLToPath(url);
}

// console.log(filename());
console.log(typeof filename);

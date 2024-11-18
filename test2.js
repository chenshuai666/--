import cc from "./test.js";
import * as dd from "./test.js";
import { filename } from "./test.js";

cc.aa = "ccc";
console.log(cc);
console.log(dd);
console.log(filename(import.meta.url));

function sprintf(str) {
  var args = arguments,
    flag = true,
    i = 1;
  str = str.replace(/%s/g, function () {
    var arg = args[i++];
    if (typeof arg === "undefined") {
      flag = false;
      return "";
    }
    return arg;
  });
  return flag ? str : "";
}

console.log(sprintf("/course/plan_ware/pdfprogress/%s/%s", 111));

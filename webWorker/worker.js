self.addEventListener("message", (res) => {
  const { data } = res;
  fetch(
    "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Df9fIBDA0UJTdVEhKzPSCXMbsT9Uc3Ors71E9HNbUFZf7wvQZNEhbWE7ibntbeVOvicmYa0achuibfKET1jticvezg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1"
  ).then((response) => {
    const blob = new Blob(response);
  });
  self.postMessage("received");
});

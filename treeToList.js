function treeToList(tree) {
  let res = [];
  for (let node of tree) {
    const queue = [node];
    while (queue.length) {
      const tmp = queue.shift();
      if (tmp?.children) {
        queue.push(...tmp.children);
        delete tmp.children;
      }
      res.push(tmp);
    }
  }
  return res;
}

const tree = [
  {
    id: 1,
    text: "节点1",
    parentId: 0,
    children: [
      {
        id: 2,
        text: "节点1_1",
        parentId: 1,
        children: [
          {
            id: 3,
            text: "节点1-1-1",
            parentId: 2,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    text: "节点2",
    parentId: 0,
  },
];

console.log(treeToList(tree));

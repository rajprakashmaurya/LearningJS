let arr = ["a", "b", "c", "a", "d", "b"];

const dupArr = (array) => {
  let obj = {};
  array.map((item) => {
    if (obj[item]) {
      obj[item] += 1;
    } else {
      obj[item] = 0;
    }
  });
  return obj;
};

console.log(Object.keys(dupArr(arr)));

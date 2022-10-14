//shift negative element to the end of an array
// let arr = [-5, 3, -4, 88, -9, -10, 21, 5, 6];
// let positive = [];
// let negative = [];
// if (let i = 0; i < 0; i++) {
//   console.log("positive"+ [i])};

function seperatePosNeg(arr) {
  let s = 0;
  let p = arr.length - 1;

  while (s < p) {
    if (arr[p] < 0) {
      p--;
    } else if (arr[s] > 0) {
      s++;
    } else {
      let temp = arr[p];
      arr[p] = arr[s];
      arr[s] = temp;
    }
  }
  return arr;
}

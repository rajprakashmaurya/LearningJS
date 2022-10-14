// sparse matrix means number of zero is greater than the half of the matrix
function isSparse(arr) {
  let zeroCount = 0;
  let totalElements = 0;

  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr.length; col++) {
      totalElements++;
      if (arr[row][col] == 0) {
        zeroCount++;
      }
    }
  }
  if (zeroCount > totalElements / 2) {
    return true;
  } else {
    return false;
  }
}

let arrr = [
  [0, 3, 0],
  [4, 5, 0],
  [1, 0, 0],
];

console.log(isSparse(arrr));

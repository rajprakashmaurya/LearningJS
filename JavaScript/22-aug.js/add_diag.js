//add diagonal matrix row wise

function isDiagonalMat(mat) {
  let result = [];
  for (let i = 0; i < mat.length; i++) {
    let sum = 0;
    for (let j = 0; j < mat[i].length; j++) {
      sum = sum + mat[j][i];
    }
    // here we can change j to i for column wise
    //and i to j for row wise
    result.push(sum);
  }
  return result;
}
let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(isDiagonalMat(mat));

///Check the matrix is Digonal Matrix or not?
function isDiagonalMat(mat) {
  for (let i = 0; i < mat.length; i++) {
    //console.log(mat[i]);

    for (let j = 0; j < mat[i].length; j++) {
      // console.log(mat[i][j]);
      if (i != j && mat[i][j] != 0) {
        return false;
      }
    }
  }
  return true;
}

let mat = [
  [1, 0, 0, 0],
  [0, 5, 0, 0],
  [0, 0, 9, 0],
  [0, 0, 0, 2],
];
console.log(isDiagonalMat(mat));

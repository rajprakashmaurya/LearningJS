//add matrix by column

let nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//==============================//
//print matrix by row *&& column
// function test(carry, row) {
//   console.log(row);
// }
// nums.reduce(test, 0);
//addind row wise
//========================================//
let columnSum = nums.reduce((carry, row) => {
  let result = [];
  for (let i = 0; i < carry.length; i++) {
    result[i] = carry[i] + row[i];
  }
  return result;
});
console.log(columnSum);
//=========================================//

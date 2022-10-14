//order of array

// let reference = [2, 3, 5, 6, 4, 8, 1, 7, 9, 0];

// let input = [1, 4, 5, 6, 7, 2, 3, 2];

// function sort(arr, reference) {
//   let result = [];

//   for (let num of reference) {
//     for (let num1 of input) {
//       if (num1 == num) {
//         result.push(num1);
//       }
//     }
//   }
//   return result;
// }
// console.log(sort(input, reference));
////another solution
let reference = [2, 3, 5, 6, 4, 8, 1, 7, 9, 0];
let input = [1, 4, 9, 5, 6, 0, 7, 2, 3, 2, 9];

let map = {
  2: 0,
  3: 1,
  5: 2,
  6: 3,
  4: 4,
  8: 5,
  1: 6,
  7: 7,
  9: 8,
  0: 9,
};

input.sort((n1, n2) => map[n1] - map[n2]);

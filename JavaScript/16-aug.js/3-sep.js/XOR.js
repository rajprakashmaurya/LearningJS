//XOR problem
//find the unique Element
// let nums = [1, 2, 3, 4, 5, 3, 2, 1, 4];
// for (let num of nums) {
//   result = result ^ num;
// }
// console.log(result);

//Find pair of elements

//let nums = [10, 20, 10, 40, 50, 70];
// for (let i = 0; i < nums.length; i++) {
//   for (let j = i + 1; i < nums.length; j++) {
//     if (nums[i] + nums[j] == 50) {
//       console.log(i + "" + j);
//     }
//   }
// }
// //another solution for find pair of element
// let map = {};
// let target = 50;
// for (let i = 0; i < nums.length; i++) {
//   if (map[target - nums[i]]) {
//     console.log(i + "" + map[target - nums[i]] + "" + i);
//   } else {
//     map[nums[i]] = i;
//   }
//}
///problem on sub array
let nums = [1, 2, 3, 4];

for (let i = 0; i < nums.length; i++) {
  let sub = [nums[i]];
  console.log(sub);

  for (let j = i + 1; j < nums.length; j++) {
    sub.push(nums[j]);
    console.log(sub);
  }
}

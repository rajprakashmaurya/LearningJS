// let nums = [1, 2, 4, 2, 2, 8, 2, 8, 2, 2];

// let maxCount = 0;

// for (let i = 0; i < nums.length; i++) {
//   let count = 0;
//   for (let j = i; j < nums.length; j++) {
//     if (nums[i] == nums[j]) {
//       count++;
//     }
//   }
//   if (count > maxCount) {
//     maxCount = count;
//   }
// }

// if (maxCount > nums.length / 2) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//by map method
// function test(nums) {
//   let map = {};

//   for (let num of nums) {
//     map[num] = (map[num] || 0) + 1;
//   }

//   for (let value of Object.values(map)) {
//     if (value > nums.length / 2) {
//       return true;
//     }
//   }
//   return false;
// }
///================
// function test(a1, a2) {
//   let i = 0;
//   let j = 0;
//   let result = [];

//   while (i < a1.length && j < a2.length) {
//     if (a1[i] == a2[j]) {
//       result.push(a1[i]);
//       i++;
//       j++;
//     } else if (a1[i] > a2[j]) {
//       j++;
//     } else {
//       i++;
//     }
//   }
//   return result;
// }
// console.log(test(2, 3));
//===============
function test(a1, a2) {
  let i = 0;
  let j = 0;

  let result = [];

  while(i<a1.length && j<a2.length) {
      if(a1[i] == a2[j]) {
          result.push(a1[i]);
          i++;
          j++;
      } else if(a1[i] > a2[j]) {
          j++;
      } else {
          i++;
      }
  }
  return result;
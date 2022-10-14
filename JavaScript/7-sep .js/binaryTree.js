// let n1 = {
//   val: 1,
//   left: null,
//   right: null,
// };
// let n2 = {
//   val: 2,
//   left: null,
//   right: null,
// };
// let n3 = {
//   val: 3,
//   left: null,
//   right: null,
// };
// let n4 = {
//   val: 4,
//   left: null,
//   right: null,
// };
// let n5 = {
//   val: 5,
//   left: null,
//   right: null,
// };
// let n6 = {
//   val: 6,
//   left: null,
//   right: null,
// };
// n1.left = n2;
// n1.right = n3;
// n2.left = n4;
// n2.right = n5;
// //visualgo for tree
// //console.log((n1.left = n2));
// function printLeaf(node) {
//   if (node.left == null && node.right == null) {
//     console.log(node.val);
//   }
//   if (node.null != null) {
//     printLeaf(node.left);
//   }
//   if (node.null != null) {
//     printLeaf(node.right);
//   }
// }
// console.log(printLeaf(node));
////================
///Check Palindrome in a String using recursion
// let str = "MALAYALAM";
// function isPal(str) {
//   if (str.length <= 1) {
//     return true;
//   }
//   let lastIndex = str.length - 1;
//   if (str[0] != str[lastIndex]) {
//     return false;
//   }
//   return isPal(str.slice(1, lastIndex));
// }
// console.log(isPal(str));
///Sum triangle from array

// function sum(arr) {
//   if (arr.length == 0) {
//     return;
//   }
//   let newArr = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     newArr.push(arr[i] + arr[i + 1]);
//   }
//   console.log(newArr);
//   sum(newArr);
// }

///subsequences recursively
function printSubSeq(bag,i , arr){
  if(i==arr.length){
    console.log( bag);
    return;
  }
  bag.push(arr[i]);
  printSubSeq(bag,i+1,arr);
  bag.pop();
  printSubSeq(bag,i+1,arr);

}
console.log(printSubSeq([1.2.3]));

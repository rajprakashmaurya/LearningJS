// function dec(n) {
//   if (n == 0) {
//     return;
//   }
//   console.log(n);
//   dec(n - 1);
// }

// console.log(dec(100));
function decending(n) {
  if (n == 0) {
    return;
  }
  console.log(n);
  decending(n - 1);
}
console.log(decending(7));

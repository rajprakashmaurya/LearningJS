// function printAscending(n) {
//   if (n == 100) {
//     return;
//   }
//   console.log(n);
//   printAscending(n + 1);
// }
// console.log(printAscending(1));
//=====================
// function ascending(n) {
//   if (n == 1) {
//     return 1;
//   }
//   ascending(n - 1);
// }
// console.log(ascending(5));
function f(n) {
  if (n == 1) {
    console.log(1);
    return;
  }

  f(n + 1);
  console.log(n);
}
console.log(f(10));

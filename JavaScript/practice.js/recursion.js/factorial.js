// const fact = (m) => {
//   if (m == 0) return 1;
//   if (m < 3) return m;

//   return m * fact(m - 1);
// };
// console.log(fact(10));

// function fact(n) {
//   if (n <= 1) {
//     return 1;
//   }

//   if (n >= 2) {
//     return n * fact(n - 1);
//   }
// }
// console.log(fact(5));

function fact1(m) {
  if (m <= 1) {
    return 1;
  }
  if (m >= 2) {
    return m * fact1(m - 1);
  }
}
console.log(fact1(-55));

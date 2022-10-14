//addition of function
// function add(n1, n2, n3, n4) {
//   return n1 + n2 + n3 + n4;
// }
// console.log(add(1, 2, 3, 4));
//======================================//
// // subtraction of two function(it will work for any subtraction)
// function sub(n1, n2) {
//   if (n1 > n2) {
//     return n1 - n2;
//   } else if (n2 > n1) {
//     return n2 - n1;
//   }
// }
// console.log(sub(100, 55));

//============================================//
//multiplication of any function
// function multiplication(n1, n2) {
//   return n1 * n2;
// }
// console.log(multiplication(200, 4));
//=========================
// function for division
// function division(n1, n2) {
//   return n1 / n2;
// }
// // console.log(division(20, 10));
// function division(n1, n2) {
//   if (n1 > n2) {
//     return n1 / n2;
//   } else if (n2 > n1) {
//     return n2 / n1;
//   }
// }
// console.log(division(10, 200));
//======================================================//
function cala(num1, num2, operation) {
  if (operation == "-") {
    return (result = num1 - num2);
  } else if (operation == "+") {
    return (result = num1 + num2);
  } else if (operation == "/") {
    return (result = num1 / num2);
  } else if (operation == "*") {
    return (result = num1 * num2);
  }
}
console.log(cala(2, 5, "+"));

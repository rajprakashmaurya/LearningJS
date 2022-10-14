//con=mposibility

// const add = (a, b) => a + b;
// const mul = (a, b) => a * b;
// console.log(add(2, mul(3, 5)));

// //currying
// const add = (a, b, c) => {
//   return a + b + c;
// };
// const curryAdd = (sum) => {
//   return (a) => {
//     return (b) => {
//       return (c) => {
//         return sum(a, b, c);
//       };
//     };
//   };
// };
// const additon = curryAdd(add);
// console.log(additon(1)(2)(3));

//arrow and regular function
let person = {
  name: "cat",

  printFunction: function () {
    console.log(arguments);
    console.log("Mr." + this.name);
  },

  print: () => {
    console.log(arguments);
    console.log("Mr." + this.name);
  },
};
///immediately invoked function
(function (name) {
  console.log("hello " + name);
})("cat");

//==========
(function (name) {
  console.log("hello " + name);
})("cat");

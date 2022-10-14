// function passByValue(num) {
//   num = num + 1;
// }

// let n = 100;
// passByValue(n);

// console.log(n); //100 will be retainedfunction passByValue(num) {
//   num = num + 1;
// }

// let n = 100;
// passByValue(n);

// console.log(n); //100 will be retained

// let student = {
//   name: "gdjsgd",
//   marks: [2, 3, 4],
// };

// let;
// //impure function
// let aribianSea = 'h2o';
// function india(){
//   aribianSea = aribianSea+"C";
// }
// function usa(){
//   aribianSea = aribianSea+"HCl"
// }

//simple tax
function simpleTax(income, Percentage) {
  return (income * Percentage) / 100;
}

function createTaxCalc(taxPercentage) {
  return function (income) {
    return (income * taxPercentage) / 100;
  };
}

// console.log(simpleTax//(60000, //30));
console.log(createTaxCalc(30));

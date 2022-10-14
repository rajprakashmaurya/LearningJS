//age for voting
// let age = 11;
// if (age < 18) {
//   console.log(" not eligible for vote");
// } else if (age >= 18) {
//   console.log("eligible for vote");
//increasing && decreasing
//in simple

// let a = 21;
// let b = 43;
// let c = 67;
// if(a<b&&b<c){
// console.log("increasing")
// }
// else if(a>b&& b>c){
//   console.log("decreasing")
// }

//in function form
// function print(a, b, c) {
//   if (a < b && b < c) {
//     console.log("increasing");
//   } else if (a > b && b > c) {
//     console.log("decreasing");
//   }
// }
// console.log(print(3, 2, 1));

//voting age in function form
// function gender(gen) {
//   if (gen == "m") {
//     console.log("male");
//   } else if (gen == "f") {
//     console.log("feamale");
//   } else console.log("other");
// }
// console.log(gender("u"));
function print(a, b, c) {
  if (a < b < c) {
    console.log("increasing");
  } else if (a > b > c) {
    console.log("decreasing");
  } else if (a > b < c) {
    console.log("not both");
  }
}
console.log(print(3, 2, 1));

// // let product = {
// //   id: 1,
// //   name: "IPhoneX",
// //   category: "electronics",
// //   dom: "12-12-12",
// //   discount: "50%",
// //   manufacturer: "Apple",
// // };
// // console.log(product.dom);
// // let nums = [1, 3, -4, 33, 435, -52, 76];
// // //for (let i = 0; i <= nums.length; i++) {
// // //console.log(nums[i]);
// // //}

// // for (let num of nums) {
// //   console.log(num);
// // }
// let p = {
//   name: "cat",
//   age: 10,
// };
// // for (let key in p) {
// //   console.log(key);
// // }
// // for (let key in p) {
// //   console.log(key + ":" + p[key]);
// // }

// // for (let key in p) {
// //   console.log(p[key]);
// // }
// console.log(p.name);
// let repairMan = {
//   name: "shon",
//   mobile: 875687,

//   call: function () {
//     console.log("call shon on 34235");
//   },
// };

// let car = {
//   name: "maruti",
//   model: 2022,
//   fuleType: "petrol",

//   techinison: repairMan,

//   run: function () {
//     console.log("warn worew");
//   },

//   brake: function () {
//     console.log("stopping the car");
//   },
//   emergency: function () {
//     this.techinison.call();
//   },
// };
// console.log(car.emergency());
// console.log(car.brake());
//console.log(Object.keys(car)[0]);

//console.log(Object.keys(car)[1]);

//console.log(Object.keys(car));
//console.log(Object.entries(car));

// //console.log(Object.values(car));
// let person = {
//   name: "cat",
//   age: 23,
// };

// let person1 = person;
// //person.name = "dog";
// console.log(person1.name);
// // person.name = "dog";
// let products = [
//   {
//     name: "IPhoneX",
//     category: "Electronics",
//     price: 80000,
//     quantity: 10,
//   },

//   {
//     name: "IPad",
//     category: "Electronics",
//     price: 100000,
//     quantity: 3,
//   },

//   {
//     name: "Maggi",
//     category: "Food",
//     price: 200,
//     quantity: 2,
//   },

//   {
//     name: "Pain Killer",
//     category: "Medicines",
//     price: 500,
//     quantity: 3,
//   },
// ];

// alert("Welcome To Amazon");

// let shoppingCart = [];

// while (true) {
//   alert("Please respond with the number you want to buy (exit to exit):");

//   let displayItems = "";
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].quantity > 0) {
//       //displayItems += "\n" +(i+1) +"." + products[i].name + " : " + products[i].price + "₹";
//       displayItems += `\n ${i + 1} . ${products[i].name} : ${
//         products[i].price
//       }₹`;
//     }
//   }
//   alert(displayItems);
//   let choice = prompt("Enter your choice");
//   if (choice === "exit") {
//     let totalPrice = 0;
//     for (let item of shoppingCart) {
//       totalPrice += item.price;
//     }
//     alert("Your total bill is: " + totalPrice + "₹");
//     break;
//   }
//   let selectedItem = products[choice - 1];
//   selectedItem.quantity--;
//   shoppingCart.push(selectedItem);
// }
//let person = {
// name: "mohan",
//age: 23,
//};
// person.printname = function () {};
// console.log("Mr  " + this.name);
// //console.log(person["name"]);
//Object.freeze(person);
// function calculate(operate, n1, n2) {
//   return operate(n1 , n2);
// };
// function add(num1 + num2){
//   return n1 + n2;

// }

// calculate(add, 4,5);
// function changeReference(arr) {
//   arr[0] = 10000;
// }
// let nums = [5, 4, 3, 2, 1];

// changeReference(nums);
// console.log(nums);
let nums = [1, 2, 3, 4, 5];
//for (let i = 0; i < num.length; i++) {
//  num[i] = num[i] * 10;
//}
//console.log(num);
//function mul10(num) {
//return num * 10;
//}
nums.map(mul10);
//console.log(nums);

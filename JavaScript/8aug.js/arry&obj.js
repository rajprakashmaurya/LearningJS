//forEach function;
//let num = [1, 2, 3, 4, 5, 6];
//num.forEach((val) => console.log("hi :" + val));

//sort function;
// let nums = [7, 6, 3, 478, 765, 6];
// function compare(a, b) {
//   return a - b;
// }
// nums.sort(compare);
// console.log(nums);

//split function
// let name = "mohan";
//console.log(name.split(","));

//slice function
//let arr = ["C", "A", "T", "D", "O", "G"];
//console.log(arr.slice(0));

//object destructuring
// let person = {
//   name: "cat",
//   age: 23,
//   mobile: "6878793",
// };

// let {age : umer}
// //let { age } = person;
//
///some destucturing properties

//let { age: umar } = person;
// console.log(person.umer);
// let newAvenger = {
//   realName: "Tony Stark",
//   location: {
//     country: "USA",
//     city: "California",
//   },
//   heroName: "Iron Man",
// };
// console.log(realName);

//rest operator in array destructuring
// let fruits = ["🍉", "🍏", "🍒", "🍓", "🥭"];
// let [watermelon, greenApple, cherry, ...lostFruits] = fruits;
// console.log(lostFruits.Fruits);

//// important question

// let arr = [1, 5, 8, 2, 4];
// arr.sort();
// let result = [];
// let start = 0;
// let end = arr.length - 1;

// for (let i = 0; i < arr.length; i++) {
//   if ((i + 1) % 2 == 0) {
//     result[i] = arr[end];
//     end--;
//   } else {
//     result[i] = arr[start];
//     start++;
//   }
// }

// console.log(result);

//question on minimum and maximum element
// let arr2 = [2, 3, 15, 6];
// arr.sort((a, b) => a - b);
// console.log("Max is", arr[arr2.length - 1]);

//console.log("Min is", arr2[0]);

// ////another method
// let arr = [8, 3, 4, 2, 6, 1, 7, 10];
// let min, max;

// if (arr[0] > arr[1]) {
//   max = arr[0];
//   min = arr[1];
// } else {
//   max = arr[1];
//   min = arr[0];
// }

// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   } else if (arr[i] < min) {
//     min = arr[i];
//   }
// }

// console.log("Max is", max);
// console.log("Min is", min);

///reverse any number
// let arr = [1, 2, 3, 4, 5];

// arr.reverse();
// console.log(arr);

// ///ooooorrrrrr
// let a = [8,3,4,2,6,1,7,10];

// let  i = 0;
// let j = a.length-1;

// while(i<j) {
//     let temp = a[i];
//     a[i] = a[j];
//     a[j] = temp;
//     i++;
//     j--;
// }

// console.log(a);

// ///fo ascendind or descending order without sort
// let a = [1, 0, 0, 0, 1, 1, 0, 1];

// let zeroCount = 0;

// for (let i = 0; i < a.length; i++) {
//   if (a[i] == 0) zeroCount++;
// }

// let oneCount = a.length - zeroCount;

// let result = [];

// for (let i = 0; i < zeroCount; i++) {
//   result.push(0);
// }

// for (let i = 0; i < oneCount; i++) {
//   result.push(1);
// }

// console.log(result);

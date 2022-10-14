// // let mobile = ["galaxy", "iphone", "samsung"];
// // let fruit = ["mango", "strobery", "banana"];
// // let emoji = ["😉", "😘", "😍", "🥰", "😊", "👍", "❤️"];
// // for (let i = 0; i < fruit.length; i++) {
// //   if (fruit[i] == "banana") {
// //     console.log("banana is found");
// //   }
// // }
// // return "not found";
// let fruit = ["🍐", "🍐", "🍐", "🍊", "🍈", "🍕", "🍔", "🌭"];
// fruit.push("🥰", "😍", 123, "sfdagd");
// //fruit.unshift("😎");
// //let purchasedfruit = fruit.shift();
// //purchasedfruit;
// //fruit.pop("🍊");
// //let arr = fruit.slice(2, 4);
// function findfruit(fruit) {
//   for (let i = 0; i < fruit.length; i++) {
//     if (fruit == fruit[i]) {
//       return i;
//     }
//   }
//   return -1;
// }

// //console.log(arr);
// //console.log(fruit);
// while (true) {
//   alert("abilable fruit are");
//   alert(fruit);

//   let requestfruit = prompt("which fruit do  want to buy?");
//   if (requestfruit == "exit") {
//     break;
//   }

//   let index = findfruit(requestfruit);
//   fruit.slice(index, 1);
//   alert(
//     'purchase completed. plese type "exit",or enter fruit from abilable itemsbelow'
//   );
//   alert(fruit);
//}
let fruits = ["🍒", "🥭", "🍌"];

function findFruit(fruit) {
  for (let i = 0; i < fruits.length; i++) {
    if (fruit == fruits[i]) {
      return i;
    }
  }
  return -1;
}

while (true) {
  if (fruits.length == 0) {
    alert("Sorry, we are out of stock :) ");
    break;
  }
  alert("Available Fruits are:");
  alert(fruits);

  let requestedFruit = prompt("Which fruit do you want to buy?");
  if (requestedFruit == "exit") {
    break;
  }

  let index = findFruit(requestedFruit);

  fruits.splice(index, 1);

  alert(
    'Purchase completed. Please type "exit" to exit, or enter fruit from available items below'
  );
}

function runARound(age) {
  // for(let i = 1; i<= 10 && age<65; i++) {
  //     console.log("Running round " + i);
  // }

  let i = 1;
  do {
    console.log("Running round " + i);
    i++;
  } while (i <= 10 && age < 65);
}
//new step
function runARound(age) {
  // for(let i = 1; i<= 10 && age<65; i++) {
  //     console.log("Running round " + i);
  // }

  let i = 1;
  while (i <= 10) {
    console.log("Running round " + i);
    i++;

    if (age >= 65) {
      break;
    }
  }
}
runARound(4);

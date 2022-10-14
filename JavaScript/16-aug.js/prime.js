/* given n, find all the numbers from 2 till n, which is prime.
2 steps
1. first we will create a function isPrime, that will tell us if a number is prime or not

2. then we will loop from 2 till n, and pass every counter value to isPrime, if it return strue, we will print, else no printing

*/

function isPrime(x) {
  //logic to find prime
  for (let i = 2; i < x; i++) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
}

function printAllPrimeTillN(n) {
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

printAllPrimeTillN(100);

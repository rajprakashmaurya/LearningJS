///find sum

function sumUntil9(n) {
  let sum = 0;
  while (n != 0 && sum <= 9) {
    let digit = n % 10;
    sum += digit;
    n = Math.floor(n / 10);
  }
  return sum;
}

console.log(sumUntil9(12345));

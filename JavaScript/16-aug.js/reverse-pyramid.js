function printPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let str = giveMeNSpaces(i - 1);
    for (let j = i; j <= n; j++) {
      str += j + " ";
    }

    console.log(str);
  }
}

function giveMeNSpaces(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += " ";
  }
  return str;
}

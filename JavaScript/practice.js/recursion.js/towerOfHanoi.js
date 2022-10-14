function towerOfHanoi(n, src, helper, destination) {
  if (n == 1) {
    console.log("transfer disk" + n + "from" + src + "to destination");
    return;
  }
  towerOfHanoi(n - 1, src, destination, helper);
  console.log("tramsfer disk" + n + "from" + src + "to destination");
  towerOfHanoi(n - 1, helper, src, destination);
}
console.log(7, "S", "H", "D");
//not working

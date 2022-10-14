function reverseString(n, idx) {
  if (idx == 0) {
    console.log(n.charAt(idx));
    return;
  }
  console.log(n.charAt(idx));
  print(n, idx - 1);

  console.log("a", n.length() - 1);
}
//not working

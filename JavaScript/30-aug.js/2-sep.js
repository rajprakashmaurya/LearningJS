function add(a, b, c) {
  return a + b + c;
}
function curryAdd(sum) {
  return (a) => {
    return (b) => {
      return (c) => {};
    };
  };
}
///========
function add(a, b) {
  return a + b;
}
// to be called  like this add(3,4)
//if we want to call add (3)(4) how do we achieve?

function addCurry(a) {
  return function (b) {
    return a + b
  }
}
//addcurry(3)(4)

//great , it is easy . now what if we want to call third argument add(1)(2)(3);
function addCurry1(a){
  return function (b){
      return (c) {
        return a+b+c;
      }
   }
} 
console.log(curryAdd(add));
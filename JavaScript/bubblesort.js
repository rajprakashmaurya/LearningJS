function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
let arr = [8, 7, 3, 2, 8];
bubbleSort(arr);
console.log(arr);

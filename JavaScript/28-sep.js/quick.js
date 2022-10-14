function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }

  let pivot = start;
  let count = 0;
  let found = -1;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] <= arr[pivot]) {
      if (found != -1) {
        swap(arr, i, found);
        found++;
      }
      count++;
    } else if (found == -1) {
      found = i;
    }
  }

  swap(arr, pivot, pivot + count);
  quickSort(arr, start, pivot + count - 1);
  quickSort(arr, pivot + count + 1, end);
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [45, 1, 2, 8, 3, 5, 90, 4, 23, 78];
quickSort(arr, 0, 9);

///middle sort
function quickSort(arr) {
  sort(arr, 0, arr.length - 1);
}

function sort(arr, left, right) {
  if (left >= right) return;

  let start = left;
  let end = right;
  let mid = Math.floor((end + start) / 2);
  let pivot = arr[mid];

  while (start < end) {
    while (arr[start] < pivot) {
      start++;
    }

    while (arr[end] > pivot) {
      end--;
    }

    if (start <= end) {
      swap(arr, start, end);
      start++;
      end--;
    }
  }
  sort(arr, left, end);
  sort(arr, start, right);
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

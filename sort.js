function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      arr = insert(arr, i, arr[i + 1]);
      continue;
    }
  }
  return arr;
}

function insert(arr, rightIndex, value) {
  let temp;
  for (let i = 0; i <= rightIndex; i++) {
    if (arr[i] >= value) {
      temp = arr[i];
      arr[i] = value;
      value = temp;
    }
  }
  arr[rightIndex + 1] = temp;
  return arr;
}

let arr = [3, 4, 6, 1, 9, 2];
console.log(insertionSort(arr));

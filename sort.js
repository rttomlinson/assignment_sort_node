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
//console.log(insertionSort(arr));

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      //check if i is greater than i + 1
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  //split the array in half
  let indexOfHalf = Math.floor(arr.length / 2);
  let leftArray = arr.slice(0, indexOfHalf);
  let rightArray = arr.slice(indexOfHalf);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(arr1, arr2) {
  let mergedArray = [];
  while (arr1.length || arr2.length) {
    if (arr2[0] === undefined || arr1[0] < arr2[0]) {
      let arr1Value = arr1.shift();
      mergedArray.push(arr1Value);
    } else if (arr1[0] === undefined || arr2[0] < arr1[0]) {
      let arr2Value = arr2.shift();
      mergedArray.push(arr2Value);
    } else {
      mergedArray.push(arr1.shift());
      mergedArray.push(arr2.shift());
    }
  }
  return mergedArray;
}

const mergeR = (xs, ys) => {
  if (xs.length === 0) return ys;
  if (ys.length === 0) return xs;

  const x = xs[0];
  const y = ys[0];

  return x < y
    ? [x, ...mergeR(xs.slice(1), ys)]
    : [y, ...mergeR(xs, ys.slice(1))];
};

function mergeSortR(arr) {
  if (arr.length < 2) return arr;

  const middle = parseInt(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, arr.length);

  return mergeR(mergeSort(left), mergeSort(right));
}
//console.log(mergeSort([4, 1, 2, 8, 9, 6, 3, 5, 4]));

function benchmark(fn, count, ...args) {
  let startTime = Date.now();
  for (let i = 0; i < count; i++) {
    fn(...args);
  }
  let endTime = Date.now();
  console.log(
    `Total time elapsed for ${count} calls: ${endTime - startTime}ms`
  );
}

let benchArr = (length) => {
  let arr = []
  for(let i=0; i< length; i++){
    let val = Math.random() * 3000
    arr.push(val)
  }
  return arr
}
console.log("short arrays")
benchmark(mergeSort, 1000, [4, 1, 2, 8, 9, 6, 3, 5, 4]);
benchmark(insertionSort, 1000, [4, 1, 2, 8, 9, 6, 3, 5, 4]);
benchmark(bubbleSort, 1000, [4, 1, 2, 8, 9, 6, 3, 5, 4]);
benchmark(mergeSortR, 1000, [4, 1, 2, 8, 9, 6, 3, 5, 4])

console.log("absurd arrays")
let benchArray = benchArr(1000000)
benchmark(mergeSort, 1, benchArray);
benchmark(insertionSort, 1, benchArray);
benchmark(bubbleSort, 1, benchArray);
// benchmark(mergeSortR, 1000, benchArray)

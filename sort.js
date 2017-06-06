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
            if (arr[i] > arr[i + 1]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
            
        }
    } while(swapped);
    return arr;
    
    
    
}

function mergeSort(arr){
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


//console.log(mergeSort([4, 1, 2, 8, 9, 6, 3, 5, 4]));

function benchmark(fn, count, ...args) {
    let startTime = Date.now();
    for (let i = 0; i < count; i++) {
        fn(...args);
    }
    let endTime = Date.now();
    console.log(`Total time elapsed for ${count} calls: ${endTime - startTime}ms`);
}

benchmark(mergeSort, 10000, [4, 1, 2, 8, 9, 6, 3, 5, 4]);
benchmark(insertionSort, 10000, [4, 1, 2, 8, 9, 6, 3, 5, 4]);
benchmark(bubbleSort, 10000, [4, 1, 2, 8, 9, 6, 3, 5, 4]);



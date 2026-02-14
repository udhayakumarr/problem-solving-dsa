function insertionSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let currentValue = arr[i];
    let preIndex = i - 1;

    while (arr[preIndex] > currentValue) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }

    arr[preIndex + 1] = currentValue;
  }

  return arr;
}

console.log(insertionSort([1, 8, 4, 5, 6, -1]));


// Time Complexity = O(n2)
// Space Complexity = O(1)

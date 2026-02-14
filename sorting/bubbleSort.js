function bubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let isSwapping = false;
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapping = true;
      }
    }

    if (!isSwapping) {
      break;
    }
  }

  return arr;
}

console.log(bubbleSort([1, 2, 4, 5, 6]));

// Time Complexity = O(n2)
// Space Complexity = O(1)

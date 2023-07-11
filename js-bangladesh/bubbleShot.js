let arr = [10, 2, 12, 8, 24, 6];
function bubbleShot(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

bubbleShot(arr);
arr;

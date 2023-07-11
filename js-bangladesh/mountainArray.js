function pickMountain(arr) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
      return mid;
    }
  }
}

console.log(pickMountain([1, 2, 3, 4, 5, 4, 3, 2, 1]));

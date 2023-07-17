function pickMountain(arr) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    } else if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

console.log(pickMountain([24, 69, 100, 99, 79, 78, 67, 36, 26, 19]));

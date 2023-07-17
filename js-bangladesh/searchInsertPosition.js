function search(num, target) {
  let start = 0;
  let end = num.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start < end) {
    if (num[mid] === target) {
      return mid;
    } else if (num[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
    mid = Math.floor((start + end) / 2);
  }
  if (num[mid] < target) {
    return mid + 1;
  }
  return mid;
}

console.log(search([10, 20, 30, 40, 50], 0));

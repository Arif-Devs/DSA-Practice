let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let target = 90;

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return `${target} found at index ${mid} `;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return 'Not found';
}
console.log(binarySearch(arr, target));

let arr2 = [90, 80, 70, 60, 50, 40, 30, 20, 10];
let target2 = 90;

function binarySearch2(arr2, target2) {
  let start2 = 0;
  let end2 = arr2.length - 1;
  let mid2;
  let asc = arr2[0] < arr2[arr2.length - 1];
  while (start2 <= end2) {
    mid2 = Math.floor((start2 + end2) / 2);
    if (arr2[mid2] === target2) {
      return `${target2} found at index ${mid2} `;
    } else if (arr2[mid2] < target2) {
      if (asc) {
        start2 = mid2 + 1;
      } else {
        end2 = mid2 - 1;
      }
    } else {
      if (asc) {
        end2 = mid2 - 1;
      } else {
        start2 = mid2 + 1;
      }
    }
  }
  return 'Not found';
}
console.log(binarySearch2(arr2, target2));

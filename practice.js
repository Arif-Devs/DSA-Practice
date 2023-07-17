const latters = ['c', 'f', 'j'];
const target = 'c';
function nextGreatestLetter(latters, target) {
  let start = 0;
  let end = latters.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (latters[mid] <= target) {
      start++;
    } else {
      end--;
    }
  }
  if (start == latters.length) {
    return latters[0];
  }
  return latters[start];
}
console.log(nextGreatestLetter(latters, target));
///////////////////////////////////////////////
// const arr = ['c', 'f', 'j'];
// const target = 'c';
// const findNearestLetter = (arr = [], target = '') => {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let mid = left + (right - left) / 2;
//     if (arr[mid] <= target) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   if (left == arr.length) {
//     return arr[0];
//   }
//   return arr[left];
// };
// console.log(findNearestLetter(arr, target));

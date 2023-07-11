const arr = [12, 52, 35, 89, 47, 24, 75];
const target = 52;

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return `${i}`;
    }
  }
  return 'not found';
}
console.log(linearSearch(arr, target));

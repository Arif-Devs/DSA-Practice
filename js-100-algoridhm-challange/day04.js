function arr(num) {
  for (let i = 1; i < num.length; i++) {
    if (num[i] < num[i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(arr([1, 2, 3, 4, 5]));
console.log(arr([1, 5, 8, 4, 5]));

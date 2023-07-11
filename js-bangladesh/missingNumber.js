function missingNumber(num) {
  let sum = 0;
  for (let i = 0; i <= num.length; i++) {
    sum = sum + i;
  }
  console.log(sum);
  // count the value of num
  let sum2 = 0;
  for (let v = 0; v < num.length; v++) {
    sum2 = sum2 + num[v];
  }
  console.log(sum2);
  return sum - sum2;
}

console.log(missingNumber([1, 3, 4, 5, 2, 8, 7, 0]));

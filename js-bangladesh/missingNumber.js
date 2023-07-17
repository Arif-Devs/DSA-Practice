// function missingNumber(num) {
//   let sum = 0;
//   for (let i = 0; i <= num.length; i++) {
//     sum = sum + i;
//   }
//   console.log(sum);
//   // count the value of num
//   let sum2 = 0;
//   for (let i = 0; i < num.length; i++) {
//     sum2 = sum2 + num[i];
//   }
//   console.log(sum2);
//   return sum - sum2;
// }

// console.log(missingNumber([1, 3, 4, 5, 8, 7, 6, 0]));

function missingNumber(nums) {
  let sum = 0;
  for (let i = 0; i <= nums.length; i++) {
    sum = sum + i;
  }
  console.log(sum);
  let sum2 = 0;
  for (let i = 0; i < nums.length; i++) {
    sum2 = sum2 + nums[i];
  }
  console.log(sum2);

  return sum - sum2;
}

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

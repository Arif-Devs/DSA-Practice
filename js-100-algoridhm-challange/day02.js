function sum(param1, param2) {
  return param1 + param2;
}

function sumAllNumbers(...param1) {
  total = 0;
  param1.forEach((item) => {
    total = total + item;
  });
  return total;
}

console.log(sumAllNumbers(1, 2, 3));

function replaceArray(inputArray, elementToReplace, substrationElem) {
  inputArray.forEach((item, index) => {
    if (item === elementToReplace) {
      inputArray[index] = substrationElem;
    }
  });
  console.log(inputArray);
}

replaceArray([1, 2, 1], 2, 9);

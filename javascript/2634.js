var filter = function (arr, fn) {
  const filteredArr = [];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr[index] = arr[i];
      index++;
    }
  }
  return filteredArr;
};

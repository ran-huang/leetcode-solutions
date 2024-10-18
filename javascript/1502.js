var canMakeArithmeticProgression = function(arr) {
  const sortedArr = arr.sort((a,b) => a-b);
  let step = sortedArr[0] - sortedArr[1];
  for (let i = 0; i < sortedArr.length-1; i++) {
      if (step != (sortedArr[i] - sortedArr[i+1])) return false;
  }
  return true;
};
canMakeArithmeticProgression([-68,-96,-12,-40,16]);
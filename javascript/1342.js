var numberOfSteps = function(num) {
  let step = 0;
  while (num > 0) {
      if (num % 2) {
          num -= 1;
      } else {
          num /= 2;
      }
      step += 1;
  }
  return step;
};

numberOfSteps(14);
var romanToInt = function(s) {
  const mapping = {
      'I': 1,
      'IV': 4,
      'V': 5,
      'IX': 9,
      'X': 10,
      'XL': 40,
      'L': 50,
      'XC': 90,
      'C': 100,
      'CD': 400,
      'D': 500,
      'CM': 900,
      'M': 1000,
  }

  let sum = 0;
  let newS = s;
  while (newS) {
      if (newS.length === 1) {
          sum += mapping[newS];
          break;
      }

      let digit = newS.slice(0,2);
      if (mapping.hasOwnProperty(digit)) {
          sum += mapping[digit];
          newS = newS.slice(2);
      } else {
          digit = newS.slice(0,1);
          sum += mapping[digit];
          newS = newS.slice(1);
      }
  }
  return sum;
};

romanToInt("III");
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const result = {};

  for (let i = 0; i < arr1.length; i++) {
    result[arr1[i].id] = arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    let currId = arr2[i].id;

    if (currId in result) {
      for (const [key, val] of Object.entries(arr2[i])) {
        result[currId][key] = val;
      }
    } else {
      result[currId] = arr2[i];
    }
  }

  return Object.values(result);
};

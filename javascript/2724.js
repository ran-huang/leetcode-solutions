/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
// var sortBy = function(arr, fn) {
//     const sorted = [...arr];
//     let tmp = null;

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if (fn(sorted[i]) > fn(sorted[j])) {
//                 tmp = sorted[i];
//                 sorted[i] = sorted[j];
//                 sorted[j] = tmp;
//             }
//         }
//     }

//     return sorted;
// };

// use toSorted
var sortBy = function (arr, fn) {
  const sorted = arr.toSorted((a, b) => {
    if (fn(a) <= fn(b)) {
      return -1;
    } else {
      return 1;
    }
  });

  return sorted;
};

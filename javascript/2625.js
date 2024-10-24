/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
// solution 1: recursion
// var flat = function (arr, n) {
//   if (n <= 0) {
//     return [...arr];
//   }

//   const flattened = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!Array.isArray(arr[i])) {
//       flattened.push(arr[i]);
//     } else {
//       const el = flat(arr[i], n - 1);
//       for (const e of el) {
//         flattened.push(e);
//       }
//     }
//   }

//   return flattened;
// };

// solution 2: recursion
// var flat = function (arr, n) {
//   if (n < 1) {
//     return arr.slice();
//   }

//   return arr.reduce((acc, val) => {
//     if (Array.isArray(val)) {
//       acc.push(...flat(val, n - 1));
//     } else {
//       acc.push(val);
//     }
//     return acc;
//   }, []);
// };

// solution 3: stack
var flat = function (arr, n) {
  const stack = [...arr.map((item) => [item, depth])];
  const result = [];

  while (stack.length > 0) {
    const [item, depth] = stack.pop();

    if (Array.isArray(item) && depth > 0) {
      stack.push(...item.map((subItem) => [subItem, depth - 1]));
    } else {
      result.push(item);
    }
  }

  return result.reverse();
};

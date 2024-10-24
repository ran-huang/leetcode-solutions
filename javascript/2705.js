/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
//// solution 1
// var compactObject = function (obj) {
//   if (obj === null) {
//     return null;
//   }
//   if (Array.isArray(obj)) {
//     const compactObj = [];
//     for (let i = 0; i < obj.length; i++) {
//       if (typeof obj[i] === 'object') {
//         const tmp = compactObject(obj[i]);
//         if (tmp) {
//           compactObj.push(tmp);
//         }
//       } else if (obj[i]) {
//         compactObj.push(obj[i]);
//       }
//     }
//     return compactObj;
//   } else if (typeof obj === 'object') {
//     const compactObj = {};
//     for (const [key, val] of Object.entries(obj)) {
//       if (typeof val === 'object') {
//         const tmp = compactObject(val);
//         if (tmp) {
//           compactObj[key] = tmp;
//         }
//       } else if (val) {
//         compactObj[key] = val;
//       }
//     }
//     return compactObj;
//   }
// };

// solution 2
var compactObject = function (obj) {
  if (obj === null) {
    return null;
  }

  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map(compactObject);
  }

  if (typeof obj !== 'object') {
    return obj;
  }

  const compacted = {};
  for (const key in obj) {
    let value = compactObject(obj[key]);
    if (value) compacted[key] = value;
  }

  return compacted;
};

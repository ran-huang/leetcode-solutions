/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  if (Array.isArray(obj)) {
    // Array
    return obj.length === 0;
  } else {
    // Object
    return Object.keys(obj).length === 0;
  }
};

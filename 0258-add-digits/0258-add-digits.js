/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
      return num ? num % 9 || 9 : 0;
};
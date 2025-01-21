/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
     while(n>1) n = n/4
    return n===1
};
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let rslt=x.toString().split('').reverse().join('');
     return x.toString()===rslt? true : false ;
       
};
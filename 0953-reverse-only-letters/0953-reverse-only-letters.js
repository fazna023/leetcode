/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
     let letters = s.match(/[a-zA-Z]/g) || []; 
    return s.replace(/[a-zA-Z]/g, () => letters.pop());
};
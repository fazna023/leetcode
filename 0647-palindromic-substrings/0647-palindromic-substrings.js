/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
   let count = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < i + 2; j++) {
            let l = i;
            let r = j;
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                count++;
                l--;
                r++;
            }
        }
    }
    
    return count;
}; 

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let k = 0;

    for (let i = 0; i < s.length; i++) {
        let curr = s.substring(k, i);
        let currChar = s[i];
        while (curr.indexOf(currChar) !== -1) {
            k++;
            curr = s.substring(k, i);
        }

        maxLength = Math.max(maxLength, i - k + 1);
    }

    return maxLength;
};
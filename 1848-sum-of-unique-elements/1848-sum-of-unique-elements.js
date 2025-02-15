/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const uniqueNumbers = nums.filter(num => nums.indexOf(num) === nums.lastIndexOf(num));
    let result = uniqueNumbers.reduce((val, acc) => val + acc, 0);
    return result;
};
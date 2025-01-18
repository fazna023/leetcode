/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let s=nums.filter(a=>a!==0);
    let x=nums.length - s.length;
    s.push(...Array(x).fill(0));
      for (i=0;i<nums.length;i++) {
        nums[i]=s[i];
    }
};

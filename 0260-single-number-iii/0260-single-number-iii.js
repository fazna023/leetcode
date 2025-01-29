/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let obj={};
    for(let i of nums){
      if(obj[i]!==undefined){delete obj[i];}
      else{obj[i]=i;}
    }
    return Object.values(obj);  
};
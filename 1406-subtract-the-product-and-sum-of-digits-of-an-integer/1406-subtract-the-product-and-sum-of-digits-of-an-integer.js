/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let digits = n.toString().split('').map(Number);
    let product=digits.reduce((acc,num)=>acc*num,1);
    let sum =digits.reduce((acc,num)=>acc+num,0);
    let rslt=product - sum;
    return rslt;
};
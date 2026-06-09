/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function(nums, k) {
    let max = Math.max(...nums), min = Math.min(...nums)
    return (max - min) * k
};
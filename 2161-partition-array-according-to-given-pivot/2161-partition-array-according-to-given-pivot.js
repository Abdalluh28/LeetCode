/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let res = []
    for (let num of nums) {
        if (num < pivot) res.push(num)
    }
    for (let num of nums) {
        if (num === pivot) res.push(num)
    }
    for (let num of nums) {
        if (num > pivot) res.push(num)
    }
    return res;
};
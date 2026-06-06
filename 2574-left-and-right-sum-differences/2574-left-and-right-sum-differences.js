/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    let sum = nums.reduce((num, ac) => num + ac, 0)
    let arr = [], start = 0, end = sum
    for (let num of nums) {
        arr.push(Math.abs(end - num - start))
        start += num
        end -= num
    }
    return arr;
};
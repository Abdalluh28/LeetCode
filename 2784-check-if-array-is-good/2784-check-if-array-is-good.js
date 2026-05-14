/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
    let n = nums.length;
    let max = Math.max(...nums);
    if (max + 1 !== n) return false;

    let map = new Map()
    for (let i = 0; i < n; i++) {
        if (map.has(nums[i]) && nums[i] !== max) return false;
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }

    return map.get(max) === 2;

};
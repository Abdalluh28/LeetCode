/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let n = nums.length;
    nums.sort((a, b) => a - b)
    let res = nums[0] + nums[1] + nums[2]

    for (let i = 0; i < n; i++) {
        let left = i + 1, right = n - 1
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (Math.abs(target - sum) < Math.abs(target - res)) {
                res = sum
            }
            if (sum < target) {
                left++
            } else if (sum > target) {
                right--
            } else {
                return sum
            }
        }
    }
    return res;
};
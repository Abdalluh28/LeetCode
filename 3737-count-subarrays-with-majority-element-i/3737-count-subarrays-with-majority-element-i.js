/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function (nums, target) {
    let n = nums.length,
        res = 0;
    let prefix = Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        if (nums[i] === target) {
            nums[i] = 1;
        } else {
            nums[i] = -1;
        }
    }
    for (let i = 1; i <= n; i++) {
        prefix[i] = prefix[i - 1] + nums[i - 1];
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (prefix[i] > prefix[j]) {
                res++;
            }
        }
    }

    return res;
};
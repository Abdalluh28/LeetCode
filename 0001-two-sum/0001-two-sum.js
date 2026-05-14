/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let arrayMap = new Map();
    let temp;
    for (let i = 0; i< nums.length; i++) {
        temp = target - nums[i];
        if (arrayMap.has(temp)) {
            let idxOne = arrayMap.get(temp);
            return [idxOne, i];
        }else {
            arrayMap.set(nums[i], i);
        }
    }
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let length = 0 ;
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i])
    }

    for (let val of set) {
        nums[length] = val
        length++
    }

    return length;
};
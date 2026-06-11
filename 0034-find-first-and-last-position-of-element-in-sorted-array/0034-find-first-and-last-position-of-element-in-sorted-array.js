/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {


    let findBound = (isFirst) => {
        let left = 0, right = nums.length - 1, mid, bound = -1;

        while (left <= right) {
            mid = Math.floor((left + right) / 2)
            if (nums[mid] === target) {
                bound = mid;
                if (isFirst) {
                    right = mid - 1
                } else {
                    left = mid + 1
                }
            } else if (nums[mid] > target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }

        return bound

    }

    return [findBound(true), findBound(false)]
};
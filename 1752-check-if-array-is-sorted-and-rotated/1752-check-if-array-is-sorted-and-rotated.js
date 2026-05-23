/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let n = nums.length;
    nums = [...nums, ...nums]
    for (let j = 0; j < n; j++) {
        let flag = true;
        let arr = nums.slice(j, j + n)
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                if (flag) {
                    flag = false
                } else return false
            }
        }
    }
    return true;
};
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0, right = height.length - 1, res = 0;
    while (left < right) {
        let width = right - left;
        if (height[left] > height[right]) {
            res = Math.max(res, width * height[right])
            right--
        } else {
            res = Math.max(res, width * height[left])
            left++
        }
    }
    return res;
};
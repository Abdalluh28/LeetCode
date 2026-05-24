/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0, right = height.length - 1, res = 0;

    while (left < right) {
        let diff = right - left;
        if (height[left] < height[right]) {
            res = Math.max(res, diff * height[left])
            left++;
        } else {
            res = Math.max(res, diff * height[right])
            right--;
        }
    }
    return res;
};
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let left, right, maxLeft, maxRight, sum = 0, temp;
    left = 1
    right = height.length - 2
    maxLeft = height[0]
    maxRight = height[right + 1]
    while (left <= right) {
        if (maxLeft <= maxRight) {
            temp = maxLeft - height[left]
            maxLeft = Math.max(maxLeft, height[left])
            left++
        } else {
            temp = maxRight - height[right]
            maxRight = Math.max(maxRight, height[right])
            right--
        }
        if (temp > 0) sum += temp
    }

    return sum

};
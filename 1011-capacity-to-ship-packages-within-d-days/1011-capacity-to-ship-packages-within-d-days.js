/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    let left = Math.max(...weights), right = weights.reduce((ac, val) => ac + val, 0)

    let check = (weight) => {
        let count = 0, sum = 0;
        for (let i = 0; i < weights.length; i++) {
            sum += weights[i]
            if (sum > weight) {
                sum = weights[i]
                count++
            }
        }
        count++
        return count <= days
    }

    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (check(mid)) {
            right = mid
        } else {
            left = mid + 1;
        }
    }
    return left
};
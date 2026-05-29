/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
    let calcSum = (num) => {
        let arr = num.toString().split('')
        return arr.reduce((a, b) => Number(a) + Number(b), 0)
    }

    let res = Infinity
    for (let num of nums) {
        res = Math.min(res, calcSum(num))
    }
    return res
};
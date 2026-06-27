/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let stack = [], len = temperatures.length;
    let res = Array(len).fill(0)
    for (let i = 0; i < len; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let prevIdx = stack.pop()
            res[prevIdx] = i - prevIdx
        }
        stack.push(i)
    }
    return res;
};
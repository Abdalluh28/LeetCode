/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    cost.sort((a, b) => a - b)
    let res = 0;
    let flag = 1;

    for (i = cost.length - 1; i >= 0; i--) {
        if (flag % 3 !== 0) {
            res += cost[i]
        }
        flag++
    }
    return res;
};
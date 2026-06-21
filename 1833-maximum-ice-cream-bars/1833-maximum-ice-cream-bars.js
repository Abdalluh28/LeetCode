/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
    let res = 0;
    costs.sort((a, b) => a - b)
    for (let c of costs) {
        if (c <= coins) {
            coins -= c
            res++
        } else break;
    }
    return res;
};
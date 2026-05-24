/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    x = String(x)
    let mid = x.length / 2
    for (let i = 0; i < mid; i++) {
        let j = x.length - i - 1;
        if (x[i] !== x[j]) return false
    }
    return true
};
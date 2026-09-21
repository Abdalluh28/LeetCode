/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        let ch = s[i]
        res += ((i + 1) * (26 - (ch.charCodeAt(0) - 'a'.charCodeAt(0))))
    }
    return res
};
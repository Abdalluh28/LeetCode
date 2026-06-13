/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function (words, weights) {
    let res = []
    for (let word of words) {
        let sum = 0;
        for (let ch of word) {
            sum += weights[ch.charCodeAt(0) - 'a'.charCodeAt(0)]
        }
        sum %= 26;
        sum = 26 - sum - 1 + 97
        res.push(sum)
    }
    return String.fromCharCode(...res)
};
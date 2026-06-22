/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    let freq = {
        b: 0,
        a: 0,
        l: 0,
        o: 0,
        n: 0,
    };
    for (let ch of text) {
        if (ch === 'b' || ch === 'a' || ch === 'l' || ch === 'o' || ch === 'n') {
            freq[ch]++
        }
    }
    freq['l'] = freq['l'] === 0 ? 0 : Math.floor(freq['l'] / 2)
    freq['o'] = freq['o'] === 0 ? 0 : Math.floor(freq['o'] / 2)
    let res = 0
    for (let [key, value] of Object.entries(freq)) {
        res = Math.max(res, value)
    }
    return res;
};
/**
 * @param {string} s
 * @return {string}
 */
var processStr = function (s) {
    let arr = [];
    for (let ch of s) {
        if (ch === '*') {
            if (arr.length > 0) {
                arr.pop()
            }
        } else if (ch === '#') {
            arr = [...arr, ...arr]
        } else if (ch === '%') {
            arr.reverse()
        } else {
            arr.push(ch)
        }
    }
    return arr.join('')
};
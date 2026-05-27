/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    let n = word.length;
    let map = new Map(), res=  0;
    for (let i = n - 1; i >= 0; i--) {
        let ch = word[i]
        if (ch >= 'a' && ch <= 'z' && !map.has(ch)) {
            map.set(ch, i)
        }
    }
    for (let i = 0; i < n; i++) {
        let ch = word[i]
        if (ch >= 'A' && ch <= 'Z' && !map.has(ch)) {
            map.set(ch, i)
        }
    }

    for (let i = 0; i < 26; i++) {
        let lower = String.fromCharCode(i + 97)
        let upper = String.fromCharCode(i + 65)
        if (map.has(upper) && map.has(lower)) {
            if (map.get(upper) > map.get(lower)) res++
        }
    }
    return res
};
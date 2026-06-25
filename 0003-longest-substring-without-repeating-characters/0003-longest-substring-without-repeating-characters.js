/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let start = 0, set = new Set();
    let len = s.length, maxLen = 0;
    for (let end = 0; end < len; end++) {
        while (set.has(s[end])) {
            set.delete(s[start])
            start++
        }
        set.add(s[end])
        maxLen = Math.max(maxLen, end - start + 1)
    }
    return maxLen
};
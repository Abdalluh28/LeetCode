/**
 * @param {string} haystack
 * @param {string} needle 
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (!haystack.includes(needle)) return -1;
    for (let i = 0; i < haystack.length; i++) {
        let k = i;
        let j = 0;
        while (haystack[k] === needle[j]) {
            j++;
            k++;
            if (j === needle.length) return i;
        }
    }
    return -1;
};
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function (arr1, arr2) {
    let n = arr1.length, m = arr2.length;
    let set = new Set();

    for (let num of arr1) {
        let ch = num.toString()
        for (let i = 0; i < ch.length; i++) {
            set.add(ch.substring(0, i + 1))
        }
    }

    let res = 0
    for (let num of arr2) {
        let ch = num.toString()
        for (let i = 0; i < ch.length; i++) {
            let prefix = ch.substring(0, i + 1)
            if (set.has(prefix)) {
                res = Math.max(res, prefix.length)
            }
        }
    }
    return res;
};
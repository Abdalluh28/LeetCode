/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    let n = A.length;
    let map = new Map();
    for (let i = 1; i <= n; i++) {
        map.set(i, 0)
    }

    let res = Array(n).fill(0)
    for (let i = 0; i < n; i++) {
        map.set(A[i], map.get(A[i]) + 1)
        map.set(B[i], map.get(B[i]) + 1)
        if (i > 0) res[i] = res[i - 1]
        if (map.get(A[i]) === 2) {
            res[i]++
        }
        if (map.get(B[i]) === 2 && A[i] !== B[i]) {
            res[i]++
        }
    }
    return res;
};
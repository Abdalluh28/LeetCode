/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let n = s.length;
    let dp = Array.from({ length: n }, () => Array(n).fill(-1))

    let dfs = (left, right) => {
        if (left < 0 || right >= n) return 0;
        if (dp[left][right] !== -1) return dp[left][right]

        if (s[left] === s[right]) {
            dp[left][right] = 1 + dfs(left - 1, right + 1)
        } else {
            dp[left][right] = 0
        }
        return dp[left][right]
    }

    let len = 0, res = '';
    for (let i = 0; i < n; i++) {
        // check palindrome for odd length
        let odd = dfs(i, i)
        let str = s.substring(i - odd + 1, i + odd)
        if (len <= odd && str.length > res.length) {
            len = odd
            res = str
        }
        // check palindrome for even length
        let even = dfs(i, i + 1)
        str = s.substring(i - even + 1, i + even + 1)
        if (len <= even && str.length > res.length) {
            len = even
            res = str
        }
    }
    return res;

};
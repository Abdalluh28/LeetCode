/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let n = s.length, m = p.length
    let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-1))

    let dfs = (i, j) => {
        // p is finished, so only true if s is finished also
        if (j === 0) {
            return i === 0
        }
        // s is finished, so true if all the remaining characters of p are *
        if (i === 0) {
            for (let k = 1; k <= j; k++) {
                if (p[k - 1] !== '*') return false
            }
            return true;
        }

        if (dp[i][j] !== -1) return dp[i][j]

        if (s[i - 1] === p[j - 1]) {
            dp[i][j] = dfs(i - 1, j - 1)
        } else {
            if (p[j - 1] === '?') {
                dp[i][j] = dfs(i - 1, j - 1)
            } else if (p[j - 1] === '*') {
                dp[i][j] = dfs(i - 1, j) || dfs(i, j - 1)
            } else {
                dp[i][j] = false
            }
        }
        return dp[i][j]
    }

    return dfs(n, m)

};
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let n = s.length, m = p.length;
    let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false))

    dp[n][m] = true
    for (let j = m - 1; j >= 0; j--) {
        if (j < m - 1 && p[j + 1] === '*') {
            dp[n][j] = dp[n][j + 2]
        }
    }

    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            if (s[i] === p[j] || p[j] === '.') {
                if (j < m - 1 && p[j + 1] === '*') {
                    dp[i][j] = dp[i + 1][j] || dp[i][j + 2]
                } else {
                    dp[i][j] = dp[i + 1][j + 1]
                }
            } else {
                if (j < m - 1 && p[j + 1] === '*') {
                    dp[i][j] = dp[i][j + 2]
                } else {
                    dp[i][j] = false
                }
            }
        }
    }


    return dp[0][0]
};
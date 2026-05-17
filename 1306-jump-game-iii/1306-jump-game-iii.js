/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
    let n = arr.length;
    let visited = Array(n).fill(false);

    let dfs = (index) => {
        if (index < 0 || index >= n) return false
        if (visited[index]) return false
        visited[index] = true;

        if (arr[index] === 0) return true;
        return dfs(index + arr[index]) || dfs(index - arr[index])
    }

    return dfs(start)
};
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
    let n = arr.length;
    let parent = Array.from({ length: n }, (_, i) => i)
    let rank = Array(n).fill(0)
    let visited = Array(n).fill(false)

    let find = (x) => {
        if (x !== parent[x]) {
            parent[x] = find(parent[x])
        }
        return parent[x]
    }

    let union = (x, y) => {
        let rootX = find(x)
        let rootY = find(y)
        if (rootX === rootY) return false;

        if (rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX
        } else if (rank[rootY] > rank[rootX]) {
            parent[rootX] = rootY
        } else {
            parent[rootY] = rootX
            rank[rootX]++
        }
    }

    let dfs = (prev, i) => {
        if (i < 0 || i >= n) return
        if (visited[i]) return;
        visited[i] = true;
        if (prev !== -1) {
            union(prev, i)
        }
        dfs(i, i + arr[i])
        dfs(i, i - arr[i])
    }

    dfs(-1, start)

    for (let i = 0; i < n; i++) {
        if (parent[i] === start && arr[i] === 0) return true;
    }
    return false
};
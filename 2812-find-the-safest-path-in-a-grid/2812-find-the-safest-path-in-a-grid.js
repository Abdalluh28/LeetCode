/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function (grid) {
    let queue = [];
    let len = grid.length;
    let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    let dist = Array.from({ length: len }, () => Array(len).fill(Infinity))
    let visited = Array.from({ length: len }, () => Array(len).fill(false))

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (grid[i][j] === 1) {
                dist[i][j] = 0
                queue.push([i, j])
            }
        }
    }

    for (let i = 0; i < queue.length; i++) {
        let [row, col] = queue[i]

        for (let [r, c] of dirs) {
            let nrow = row + r, ncol = col + c;
            if (nrow >= 0 && ncol >= 0 && nrow < len && ncol < len && dist[nrow][ncol] === Infinity) {
                dist[nrow][ncol] = dist[row][col] + 1
                queue.push([nrow, ncol])
            }
        }
    }

    let pq = new MaxPriorityQueue(x => x[2])
    pq.enqueue([0, 0, dist[0][0]])

    while (!pq.isEmpty()) {
        let [row, col, dis] = pq.dequeue()

        if (row === len - 1 && col === len - 1) {
            return dis
        }

        if (visited[row][col]) continue;
        visited[row][col] = true

        for (let [r, c] of dirs) {
            let nrow = row + r, ncol = col + c;
            if (nrow >= 0 && ncol >= 0 && nrow < len && ncol < len && !visited[nrow][ncol]) {
                let newDist = Math.min(dis, dist[nrow][ncol])
                pq.enqueue([nrow, ncol, newDist])
            }
        }
    }

};
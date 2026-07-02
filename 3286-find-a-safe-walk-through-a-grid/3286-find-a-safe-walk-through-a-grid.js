/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
var findSafeWalk = function (grid, health) {
    const m = grid.length;
    const n = grid[0].length;

    // Lose health if the starting cell is unsafe
    let startHealth = health - grid[0][0];
    if (startHealth <= 0) return false;

    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    // best[r][c] = maximum remaining health when reaching (r, c)
    const best = Array.from({ length: m }, () => Array(n).fill(-1));
    best[0][0] = startHealth;

    const queue = [[0, 0, startHealth]];
    let head = 0;

    while (head < queue.length) {
        const [row, col, curHealth] = queue[head++];

        if (row === m - 1 && col === n - 1) {
            return true;
        }

        for (const [dr, dc] of dirs) {
            const nr = row + dr;
            const nc = col + dc;

            if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;

            const nextHealth = curHealth - grid[nr][nc];

            if (nextHealth <= 0) continue;

            // Only continue if we reached this cell with more health
            if (nextHealth > best[nr][nc]) {
                best[nr][nc] = nextHealth;
                queue.push([nr, nc, nextHealth]);
            }
        }
    }

    return false;
};
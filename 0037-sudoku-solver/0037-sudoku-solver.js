/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    let isValid = (row, col, ch) => {
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === ch) return false
            if (board[i][col] === ch) return false
            let boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3)
            let boxCol = 3 * Math.floor(col / 3) + (i % 3);
            if (board[boxRow][boxCol] === ch) return false
        }
        return true;
    }

    let backtrack = () => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '.') {
                    for (let i = 1; i <= 9; i++) {
                        let ch = String(i);
                        if (isValid(row, col, ch)) {
                            board[row][col] = ch;
                            if (backtrack()) return true;
                            board[row][col] = '.'
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    backtrack();
};
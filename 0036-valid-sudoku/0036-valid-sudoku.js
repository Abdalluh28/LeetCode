/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    for (let box = 0; box < board.length; box++) {
        let set = new Set();
        for (let cell = 0; cell < board.length; cell++) {
            const row = Math.floor(box / 3) * 3 + Math.floor(cell / 3);
            const col = (box % 3) * 3 + (cell % 3);
            if (board[row][col] !== '.') {
                if (set.has(board[row][col])) return false
                set.add(board[row][col])
            }
        }
    }

    for (let row = 0; row < board.length; row++) {
        let set = new Set();
        for (let col = 0; col < board.length; col++) {
            if (board[row][col] !== '.') {
                if (set.has(board[row][col])) return false
                set.add(board[row][col])
            }
        }
    }

    for (let row = 0; row < board.length; row++) {
        let set = new Set();
        for (let col = 0; col < board.length; col++) {
            if (board[col][row] !== '.') {
                if (set.has(board[col][row])) return false
                set.add(board[col][row])
            }
        }
    }

    return true;

};
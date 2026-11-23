class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const row = board.length;
        const col = board[0].length;
        const dirs = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1],
        ];

        const edgeCells = [];
        for (let r = 0; r < row; r++) {
            if (board[r][0] === "O") {
                edgeCells.push([r, 0]);
                board[r][0] = "E";
            }
            if (board[r][col - 1] === "O") {
                edgeCells.push([r, col - 1]);
                board[r][col - 1] = "E";
            }
        }

        for (let c = 0; c < col; c++) {
            if (board[0][c] === "O") {
                edgeCells.push([0, c]);
                board[0][c] = "E";
            }
            if (board[row - 1][c] === "O") {
                edgeCells.push([row - 1, c]);
                board[row - 1][c] = "E";
            }
        }

        while (edgeCells.length) {
            for (let i = edgeCells.length - 1; i >= 0; i--) {
                const [cr, cc] = edgeCells.shift();
                for (const [dr, dc] of dirs) {
                    const nr = cr + dr;
                    const nc = cc + dc;
                    if (nr < 0 || nr >= row || nc < 0 || nc >= col) {
                        continue;
                    }
                    if (board[nr][nc] !== "O") {
                        continue;
                    }
                    board[nr][nc] = "E";
                    edgeCells.push([nr, nc]);
                }
            }
        }

        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (board[r][c] === "O") {
                    board[r][c] = "X";
                } else if (board[r][c] === "E") {
                    board[r][c] = "O";
                }
            }
        }
    }
}

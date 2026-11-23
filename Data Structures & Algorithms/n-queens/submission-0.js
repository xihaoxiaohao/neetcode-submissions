class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const res = [];
        const board = Array.from({ length: n }, () => Array(n).fill("."));

        helper(0);
        return res;

        function helper(rowIdx) {
            if (rowIdx === n) {
                res.push(board.map((r) => r.join("")));
                return;
            }

            for (let colIdx = 0; colIdx < n; colIdx++) {
                if (isValid(rowIdx, colIdx)) {
                    board[rowIdx][colIdx] = "Q";
                    helper(rowIdx + 1);
                    board[rowIdx][colIdx] = ".";
                }
            }
        }

        function isValid(rowIdx, colIdx) {
            for (let r = 0; r < rowIdx; r++) {
                if (board[r][colIdx] === "Q") return false;
            }

            let r = rowIdx - 1;
            let c = colIdx - 1;
            while (r >= 0 && c >= 0) {
                if (board[r][c] === "Q") return false;
                r -= 1;
                c -= 1;
            }

            r = rowIdx - 1;
            c = colIdx + 1;
            while (r >= 0 && c < n) {
                if (board[r][c] === "Q") return false;
                r -= 1;
                c += 1;
            }

            return true;
        }
    }
}

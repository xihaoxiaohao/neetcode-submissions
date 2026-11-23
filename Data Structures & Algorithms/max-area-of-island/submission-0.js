class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let res = 0;
        const row = grid.length;
        const col = grid[0].length;

        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (grid[r][c] === 1) {
                    res = Math.max(res, helper(r, c));
                }
            }
        }

        return res;

        function helper(r, c) {
            if (r < 0 || r >= row || c < 0 || c >= col) {
                return 0;
            }
            if (grid[r][c] === 0) {
                return 0;
            }

            grid[r][c] = 0;
            let cnt = 1;
            const dirs = [
                [-1, 0],
                [0, 1],
                [1, 0],
                [0, -1],
            ];
            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;
                cnt += helper(nr, nc);
            }

            return cnt;
        }
    }
}

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let res = 0;
        const row = grid.length;
        const col = grid[0].length;
        const dirs = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1],
        ];
        const queue = [];
        let fresh = 0;

        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (grid[r][c] === 2) {
                    queue.push([r, c]);
                }
                if (grid[r][c] === 1) {
                    fresh += 1;
                }
            }
        }

        while (fresh > 0 && queue.length > 0) {
            for (let i = queue.length - 1; i >= 0; i--) {
                const [cr, cc] = queue.shift();
                for (const [dr, dc] of dirs) {
                    const nr = cr + dr;
                    const nc = cc + dc;
                    if (nr < 0 || nr >= row || nc < 0 || nc >= col) {
                        continue;
                    }
                    if (grid[nr][nc] !== 1) {
                        continue;
                    }
                    grid[nr][nc] = 2;
                    queue.push([nr, nc]);
                    fresh -= 1;
                }
            }
            res += 1;
        }

        return fresh === 0 ? res : -1;
    }
}

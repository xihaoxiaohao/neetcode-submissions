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
        let totalFruit = 0;
        let rottenFruit = 0;

        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (grid[r][c] === 2) {
                    queue.push([r, c]);
                    rottenFruit += 1;
                }
                if (grid[r][c] !== 0) {
                    totalFruit += 1;
                }
            }
        }

        if (rottenFruit === 0 && totalFruit > 0) return -1;
        if (rottenFruit === 0 || totalFruit === rottenFruit) return 0;

        while (queue.length) {
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
                    rottenFruit += 1;
                }
            }
            res += 1;
            if (rottenFruit === totalFruit) return res;
        }

        return -1;
    }
}

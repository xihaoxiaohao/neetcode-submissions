class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const res = [];
        const row = heights.length;
        const col = heights[0].length;
        const pac = Array.from({ length: row }, () => Array(col).fill(false));
        const atl = Array.from({ length: row }, () => Array(col).fill(false));

        for (let r = 0; r < row; r++) {
            this.helper(r, 0, pac, heights);
            this.helper(r, col-1, atl, heights);
        }

        for (let c = 0; c < col; c++) {
            this.helper(0, c, pac, heights);
            this.helper(row-1, c, atl, heights);
        }

        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (pac[r][c] && atl[r][c]) {
                    res.push([r,c]);
                }
            }
        }

        return res;
    }

    helper(r, c, ocean, heights) {
        const row = heights.length;
        const col = heights[0].length;
        if (ocean[r][c]) return;
        
        const dirs = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1]
        ];
        ocean[r][c] = true;
        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr < 0 || nr >= row || nc < 0 || nc >= col) continue;;

            if (heights[nr][nc] >= heights[r][c]) {
                this.helper(nr, nc, ocean, heights);
            }
        }
    }
}

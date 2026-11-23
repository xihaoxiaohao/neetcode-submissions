class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let res = 0;
        const row = grid.length;
        const col = grid[0].length;
        const visited = new Set();

        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                const key = `${r},${c}`;
                if (visited.has(key) || grid[r][c] === '0') continue;
                res += 1;
                this.helper(r, c, visited, grid);
            }
        }

        return res;
    }

    helper(r, c, visited, grid) {
        const row = grid.length;
        const col = grid[0].length;
        if (r < 0 || r >= row || c < 0 || c >= col) return;
        if (grid[r][c] === '0') return;

        const key = `${r},${c}`;
        if (visited.has(key)) return;
        
        visited.add(key);
        this.helper(r-1, c, visited, grid);
        this.helper(r+1, c, visited, grid);
        this.helper(r, c-1, visited, grid);
        this.helper(r, c+1, visited, grid);
    }
}

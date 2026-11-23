class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const row = grid.length;
        const col = grid[0].length;

        const dirs = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1],
        ];
        const visited = Array.from({ length: row }, () => Array(col).fill(false));

        const minHeap = new PriorityQueue((a, b) => a[2] - b[2]);

        minHeap.enqueue([0, 0, grid[0][0]]);

        while (minHeap.size()) {
            const [r, c, t] = minHeap.dequeue();
            if (r === row - 1 && c === col - 1) return t;
            if (visited[r][c]) continue;
            visited[r][c] = true;

            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;
                if (nr < 0 || nr >= row || nc < 0 || nc >= col) continue;
                if (visited[nr][nc]) continue;
                minHeap.enqueue([nr, nc, Math.max(t, grid[nr][nc])]);
            }
        }

        return -1;
    }
}

class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        let res = 0;
        const row = matrix.length;
        const col = matrix[0].length;
        const dirs = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1],
        ];
        const hm = new Map();

        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                res = Math.max(res, helper(r, c, -1));
            }
        }

        return res;

        function helper(r, c, preMax) {
            const key = `${r}-${c}`;

            if (r < 0 || r >= row || c < 0 || c >= col) {
                return 0;
            }

            if (matrix[r][c] <= preMax) {
                return 0;
            }

            if (hm.has(key)) {
                return hm.get(key);
            }

            let curRes = 0;
            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;
                curRes = Math.max(curRes, 1 + helper(nr, nc, matrix[r][c]));
            }

            hm.set(key, curRes);
            return curRes;
        }

        function helper2(r, c, prevVal) {
            const key = `${r}-${c}`;
            if (r < 0 || r >= row || c < 0 || c >= col || matrix[r][c] <= prevVal) {
                return 0;
            }
            if (hm.has(key)) return hm.get(key);

            let res = 1;
            for (let d of dirs) {
                res = Math.max(res, 1 + helper(r + d[0], c + d[1], matrix[r][c]));
            }
            hm.set(key, res);
            return res;
        }
    }
}

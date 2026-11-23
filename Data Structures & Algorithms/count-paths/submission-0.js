class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const dp = Array.from({ length: m }, () => Array(n).fill(0));

        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (r === 0 || c === 0) {
                    dp[r][c] = 1;
                } else {
                    dp[r][c] = dp[r-1][c] + dp[r][c-1];
                }
            }
        }

        return dp[m-1][n-1];
    }
}

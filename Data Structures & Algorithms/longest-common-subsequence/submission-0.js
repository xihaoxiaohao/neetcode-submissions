class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const dp = Array.from({ length: text1.length + 1 }, () => Array(text2.length + 1).fill(0));

        for (let r = 1; r < dp.length; r++) {
            for (let c = 1; c < dp[0].length; c++) {
                if (text1[r-1] === text2[c-1]) {
                    dp[r][c] = 1 + dp[r-1][c-1];
                } else {
                    dp[r][c] = Math.max(dp[r][c-1], dp[r-1][c]);
                }
            }
        }
        
        return dp[text1.length][text2.length];
    }
}

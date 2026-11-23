class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const sum = nums.reduce((pre, cur) => pre + cur, 0);
        if (sum % 2 !== 0) return false;

        const n = nums.length;
        const target = sum / 2;
        const dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(false));

        for (let r = 0; r < dp.length; r++) {
            dp[r][0] = true;
        }

        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= target; j++) {
                if (nums[i] <= j) {
                    dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
                } else {
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }

        return dp[n][target];
    }
}

class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const n = cost.length;
        const dp = Array(n + 1).fill(0);

        for (let i = 2; i < dp.length; i++) {
            const a = dp[i - 2] + cost[i - 2];
            const b = dp[i - 1] + cost[i - 1];
            dp[i] = Math.min(a, b);
        }

        return dp[dp.length - 1];
    }
}

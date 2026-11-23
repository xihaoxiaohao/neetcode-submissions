class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 2) return n;
        let pre2 = 1;
        let pre1 = 2;
        for (let i = 3; i <= n; i++) {
            const cur = pre2 + pre1;
            pre2 = pre1;
            pre1 = cur;
        }
        return pre1;
    }
}

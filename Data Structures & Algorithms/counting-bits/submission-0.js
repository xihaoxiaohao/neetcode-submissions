class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const num = Array(n + 1).fill(0);
        for (let i = 1; i <= n; i++) {
            if (i % 2 === 0) {
                num[i] = num[i/2];
            } else {
                num[i] = num[Math.floor(i/2)] + 1;
            }
        }
        return num;
    }
}

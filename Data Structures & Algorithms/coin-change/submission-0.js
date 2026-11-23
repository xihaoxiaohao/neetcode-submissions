class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const hm = new Map();

        const helper = (amount) => {
            if (amount === 0) return 0;
            if (hm.has(amount)) return hm.get(amount);

            let res = Infinity;
            for (const coin of coins) {
                if (coin <= amount) {
                    res = Math.min(res, 1 + helper(amount - coin));
                }
            }

            hm.set(amount, res);
            return res;
        };

        const minCoins = helper(amount);
        return minCoins === Infinity ? -1 : minCoins;
    }
}

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const hm = new Map();

        return helper(0, true);

        function helper(i, canBuy) {
            if (i >= prices.length) {
                return 0;
            }

            const key = `${i}-${canBuy}`;
            if (hm.has(key)) {
                return hm.get(key);
            }

            let res;
            if (canBuy) {
                const skip = helper(i + 1, true);
                const buy = -prices[i] + helper(i + 1, false);
                res = Math.max(skip, buy);
            } else {
                const skip = helper(i + 1, false);
                const sell = prices[i] + helper(i + 2, true);
                res = Math.max(skip, sell);
            }

            hm.set(key, res);
            return res;
        }
    }
}

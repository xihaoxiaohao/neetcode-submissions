class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0;
        let minPrice = prices[0];
        for (let i = 0; i < prices.length; i++) {
            res = Math.max(res, prices[i] - minPrice);
            minPrice = Math.min(minPrice, prices[i]);
        }
        return res;
    }
}

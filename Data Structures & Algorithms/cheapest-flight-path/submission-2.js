class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        let prices = Array(n).fill(Infinity);
        prices[src] = 0;

        for (let i = 0; i <= k; i++) {
            const tmpPrices = [...prices];

            for (const flight of flights) {
                const [s, d, p] = flight;
                if (prices[s] === Infinity) continue;
                if (prices[s] + p < tmpPrices[d]) {
                    tmpPrices[d] = prices[s] + p;
                }
            }

            prices = tmpPrices;
        }

        return prices[dst] === Infinity ? -1 : prices[dst];
    }
}

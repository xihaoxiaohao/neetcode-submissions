class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const hm = new Map();
        return helper(0, amount);

        function helper(idx, remaining) {
            if (remaining === 0) return 1;
            if (remaining < 0 || idx >= coins.length) return 0;

            const key = `${idx}-${remaining}`;
            if (hm.has(key)) return hm.get(key);

            const take = helper(idx, remaining - coins[idx]);
            const skip = helper(idx + 1, remaining);
            const res = take + skip;

            hm.set(key, res);
            return res;
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        const arr = [1, ...nums, 1];
        const n = arr.length;

        const hm = new Map();
        return helper(0, n - 1);

        function helper(left, right) {
            if (left + 1 === right) return 0;

            const key = `${left}-${right}`;
            if (hm.has(key)) return hm.get(key);

            let res = 0;

            for (let i = left + 1; i < right; i++) {
                const coins = helper(left, i) + helper(i, right) + arr[left] * arr[i] * arr[right];
                res = Math.max(res, coins);
            }

            hm.set(key, res);
            return res;
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const hm = new Map();
        return helper(0, 0);

        function helper(idx, sum) {
            if (idx === nums.length) {
                return sum === target ? 1 : 0;
            }

            const key = `${idx}-${sum}`;
            if (hm.has(key)) {
                return hm.get(key);
            }

            const add = helper(idx + 1, sum + nums[idx]);
            const subtract = helper(idx + 1, sum - nums[idx]);
            const res = add + subtract;

            hm.set(key, res);
            return res;
        }
    }
}

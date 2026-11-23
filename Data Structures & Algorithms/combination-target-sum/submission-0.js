class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        nums.sort((a, b) => a - b);
        const res = [];

        const helper = (nums, target, startIdx, cur) => {
            if (target === 0) {
                res.push([...cur]);
                return;
            }
            if (nums[startIdx] > target) return;

            for (let i = startIdx; i < nums.length; i++) {
                cur.push(nums[i]);
                helper(nums, target - nums[i], i, cur);
                cur.pop();
            }
        }

        helper(nums, target, 0, []);
        return res;
    }
}

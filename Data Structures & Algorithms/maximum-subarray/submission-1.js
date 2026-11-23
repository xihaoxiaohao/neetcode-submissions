class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let res = -Infinity;
        let curMax = -Infinity;
        for (const num of nums) {
            curMax = Math.max(num, curMax + num);
            res = Math.max(res, curMax);
        }
        return res;
    }
}

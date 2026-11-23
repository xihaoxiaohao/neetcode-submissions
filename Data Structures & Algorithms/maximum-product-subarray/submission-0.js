class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = nums[0];
        let curMin = 1;
        let curMax = 1;

        for (const num of nums) {
            const tmp = curMax * num;
            curMax = Math.max(num, num*curMax, num*curMin);
            curMin = Math.min(num, tmp, num*curMin);
            res = Math.max(res, curMax);
        }

        return res;
    }
}

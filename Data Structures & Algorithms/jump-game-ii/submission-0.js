class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let res = 0;
        let maxSoFar = 0;
        let curMax = 0;

        for (let i = 0; i < nums.length - 1; i++) {
            maxSoFar = Math.max(maxSoFar, nums[i] + i);
            if (i === curMax) {
                res += 1;
                curMax = maxSoFar;
            }
        }

        return res;
    }
}

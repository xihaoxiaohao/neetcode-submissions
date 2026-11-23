class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        if (nums.length === 1) return true;

        let curMax = 0;
        for (let i = 0; i < nums.length; i++) {
            if (i > curMax) return false;
            curMax = Math.max(curMax, i + nums[i]);
        }
        return true;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];
        return Math.max(
            this.helper(nums.slice(1)),
            this.helper(nums.slice(0, -1))
        );
    }

    helper(nums) {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];
        let pre1 = 0;
        let pre2 = 0;
        for (const num of nums) {
            const cur = Math.max(pre1, pre2 + num);
            pre2 = pre1;
            pre1 = cur;
        }
        return pre1;
    }
}

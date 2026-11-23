class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hm = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (hm.has(nums[i])) {
                return [hm.get(nums[i]), i];
            }
            hm.set(target - nums[i], i);
        }
        return [-1, -1];
    }
}

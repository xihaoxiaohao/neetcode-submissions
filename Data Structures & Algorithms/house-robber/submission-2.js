class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let pre2 = 0;
        let pre1 = 0;
        for (const num of nums) {
            const current = Math.max(pre1, pre2 + num);
            pre2 = pre1;
            pre1 = current;
        }
        return pre1;
    }
}

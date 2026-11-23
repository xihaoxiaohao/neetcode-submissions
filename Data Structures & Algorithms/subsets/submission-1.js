class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [[]];
        const cur = [];

        helper(0);

        return res;

        function helper(startIdx) {
            // 1. Base case / termination condition

            // 2. Explore choices
            for (let i = startIdx; i < nums.length; i++) {
                // Make choice
                cur.push(nums[i]);

                // Record result if valid
                res.push([...cur]);

                // Explore
                helper(i + 1);

                // Undo choice
                cur.pop();
            }
        }
    }
}

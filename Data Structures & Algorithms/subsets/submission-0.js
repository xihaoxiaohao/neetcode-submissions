class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [[]];
        let cur = [];

        helper(cur, 0);

        return res;

        function helper(cur, startIdx) {
            if (startIdx === nums.length) return;

            for (let i = startIdx; i < nums.length; i++) {
                cur.push(nums[i]);
                res.push([...cur]);

                helper(cur, i + 1);

                cur.pop();
            }
        }
    }
}

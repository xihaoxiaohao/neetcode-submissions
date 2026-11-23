class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const res = [[]];
        const cur = [];
        nums.sort((a, b) => a - b);

        helper(0);

        return res;

        function helper(startIdx) {
            for (let i = startIdx; i < nums.length; i++) {
                if (i > startIdx && nums[i] === nums[i - 1]) continue;

                cur.push(nums[i]);
                res.push([...cur]);

                helper(i + 1);

                cur.pop();
            }
        }
    }
}

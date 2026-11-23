class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
        const cur = [];
        const visited = new Set();

        helper();

        return res;

        function helper() {
            if (cur.length === nums.length) {
                res.push([...cur]);
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                if (visited.has(nums[i])) continue;
                cur.push(nums[i]);
                visited.add(nums[i]);

                helper();

                visited.delete(nums[i]);
                cur.pop();
            }
        }
    }
}

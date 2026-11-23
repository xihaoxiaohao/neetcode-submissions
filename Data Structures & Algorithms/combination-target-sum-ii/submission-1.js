class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = [];
        const cur = [];
        candidates.sort((a, b) => a - b);

        helper(0, 0);
        return res;

        function helper(startIdx, sum) {
            if (sum === target) {
                res.push([...cur]);
                return;
            }

            if (sum > target) return;

            for (let i = startIdx; i < candidates.length; i++) {
                if (i > startIdx && candidates[i] === candidates[i - 1]) {
                    continue;
                }

                cur.push(candidates[i]);
                sum += candidates[i];

                helper(i + 1, sum);

                sum -= candidates[i];
                cur.pop();
            }
        }
    }
}

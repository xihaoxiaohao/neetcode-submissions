class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (!digits) return [];
        const res = [];
        const cur = "";

        const hm = new Map([
            [2, "abc"],
            [3, "def"],
            [4, "ghi"],
            [5, "jkl"],
            [6, "mno"],
            [7, "pqrs"],
            [8, "tuv"],
            [9, "wxyz"],
        ]);

        helper(0, cur);
        return res;

        function helper(idx, cur) {
            if (cur.length === digits.length) {
                res.push(cur);
                return;
            }

            const str = hm.get(Number(digits[idx]));
            for (const ch of str) {
                helper(idx + 1, cur + ch);
            }
        }
    }
}

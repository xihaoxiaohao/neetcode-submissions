class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (!digits) return [];
        const res = [];
        const cur = "";

        const hm = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz",
        };

        helper(0, cur);
        return res;

        function helper(startIdx, cur) {
            if (cur.length === digits.length) {
                res.push(cur);
                return;
            }

            for (let i = startIdx; i < digits.length; i++) {
                const str = hm[digits[i]];
                for (const ch of str) {
                    helper(i + 1, cur + ch);
                }
            }
        }
    }
}

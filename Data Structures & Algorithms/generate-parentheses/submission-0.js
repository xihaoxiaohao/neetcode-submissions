class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        let cur = "";

        helper(0, 0, cur);

        return res;

        function helper(numOpen, numClose, cur) {
            if (numOpen === numClose && numOpen === n) {
                res.push(cur);
                return;
            }

            if (numOpen < n) helper(numOpen + 1, numClose, cur + "(");
            if (numClose < numOpen) helper(numOpen, numClose + 1, cur + ")");
        }
    }
}

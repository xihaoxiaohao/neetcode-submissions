class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let low = 0; // Minimum possible number of unmatched opening parentheses.
        let high = 0; // Maximum possible number of unmatched opening parentheses.

        for (const ch of s) {
            if (ch === "(") {
                low += 1;
                high += 1;
            } else if (ch === ")") {
                low -= 1;
                high -= 1;
            } else {
                low -= 1;
                high += 1;
            }

            if (high < 0) return false;
            if (low < 0) low = 0;
        }

        return low === 0;
    }
}

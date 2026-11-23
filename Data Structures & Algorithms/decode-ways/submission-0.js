class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const dp = new Map();
        dp.set(s.length, 1);
        return this.helper(s, 0, dp);
    }

    helper(s, i, dp) {
        if (dp.has(i)) return dp.get(i);
        if (s[i] === '0') return 0;

        let res = this.helper(s, i + 1, dp);
        if (i + 1 < s.length && s[i] === '1' || (s[i] === '2' && s[i+1] < '7')) {
            res += this.helper(s, i + 2, dp);
        }
        
        dp.set(i, res);
        return res;
    }
}

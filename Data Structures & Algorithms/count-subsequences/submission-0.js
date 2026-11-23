class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const sLen = s.length;
        const tLen = t.length;
        if (sLen < tLen) return 0;

        const hm = new Map();
        return helper(0, 0);

        function helper(i, j) {
            if (j === t.length) return 1;
            if (i === s.length) return 0;

            const key = `${i}-${j}`;
            if (hm.has(key)) return hm.get(key);

            let res = 0;
            if (s[i] === t[j]) {
                res += helper(i + 1, j + 1);
            }
            res += helper(i + 1, j);

            hm.set(key, res);
            return res;
        }
    }
}

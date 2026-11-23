class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        let maxFreq = 0;
        let start = 0;
        const hm = new Map();

        for (let end = 0; end < s.length; end++) {
            const ch = s[end];
            hm.set(ch, (hm.get(ch) || 0) + 1);
            maxFreq = Math.max(maxFreq, hm.get(ch));
            if (end - start + 1 - maxFreq > k) {
                const startChar = s[start];
                hm.set(startChar, hm.get(startChar) - 1);
                start += 1;
            }
            res = Math.max(res, end - start + 1);
        }

        return res;
    }
}

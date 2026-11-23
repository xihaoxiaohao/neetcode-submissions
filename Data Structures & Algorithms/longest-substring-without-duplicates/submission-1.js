class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0;
        let start = 0;
        const hm = new Map();

        for (let end = 0; end < s.length; end++) {
            const cur = s[end];
            if (hm.has(cur)) {
                start = Math.max(start, hm.get(cur) + 1);
            }
            hm.set(cur, end);
            res = Math.max(res, end - start + 1);
        }
        
        return res;
    }
}

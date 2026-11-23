class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const hm = new Map();
        for (const ch of s1) {
            hm.set(ch, (hm.get(ch) || 0) + 1);
        }
        let start = 0;
        for (let end = 0; end < s2.length; end++) {
            const ch = s2[end];
            if (end - start + 1 > s1.length) {
                const startCh = s2[start];
                hm.set(startCh, (hm.get(startCh) || 0) + 1);
                if (hm.get(startCh) === 0) hm.delete(startCh);
                start += 1;
            }
            hm.set(ch, (hm.get(ch) || 0) - 1);
            if (hm.get(ch) === 0) hm.delete(ch);
            if (hm.size === 0) return true;
        }
        return false;
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const hm = new Map();
        for (let i = 0; i < s.length; i++) {
            const ch = s[i];
            hm.set(ch, (hm.get(ch) || 0) + 1);
        }
        for (let i = 0; i < t.length; i++) {
            const ch = t[i];
            if (!hm.has(ch)) return false;
            hm.set(ch, hm.get(ch) - 1);
        }
        return [...hm.values()].every(e => e === 0);
    }
}

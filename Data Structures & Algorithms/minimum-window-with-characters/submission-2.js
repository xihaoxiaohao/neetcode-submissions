class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let resLen = Infinity;
        let resStart = 0;

        const hmS = new Map();
        const hmT = new Map();
        for (const ch of t) {
            hmT.set(ch, (hmT.get(ch) || 0) + 1);
        }
        let need = hmT.size;
        let have = 0;

        let start = 0;
        for (let end = 0; end < s.length; end++) {
            const ch = s[end];
            hmS.set(ch, (hmS.get(ch) || 0) + 1);
            if (hmT.has(ch) && hmS.get(ch) === hmT.get(ch)) {
                have += 1;
            }
            while (have === need) {
                if (end - start + 1 < resLen) {
                    resLen = Math.min(resLen, end - start + 1);
                    resStart = start;
                }
                const startCh = s[start];
                hmS.set(startCh, hmS.get(startCh) - 1);
                if (hmT.has(startCh) && hmS.get(startCh) < hmT.get(startCh)) {
                    have -= 1;
                }
                start += 1;
            }
        }
        return resLen === Infinity ? "" : s.slice(resStart, resStart + resLen);
    }
}

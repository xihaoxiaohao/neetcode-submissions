class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return '';
        let sizes = [];
        let parts = [];
        for (const s of strs) {
            sizes.push(s.length);
        }
        for (const sz of sizes) {
            parts.push(String(sz), ',');
        }
        parts.push('#', ...strs);
        return parts.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) return [];
        const sizes = [];
        const res = [];
        let i = 0;

        while (str[i] !== '#') {
            let j = i;
            while (str[j] !== ',') {
                j += 1;
            }
            sizes.push(Number(str.substring(i, j)));
            i = j + 1;
        }
        i += 1;

        for (const sz of sizes) {
            res.push(str.substring(i, i + sz));
            i += sz;
        }

        return res;
    }
}

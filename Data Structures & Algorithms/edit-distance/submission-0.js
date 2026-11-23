class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const w1Len = word1.length;
        const w2Len = word2.length;
        const hm = new Map();
        return helper(0, 0);

        function helper(i, j) {
            if (i === w1Len) return w2Len - j;
            if (j === w2Len) return w1Len - i;

            const key = `${i}-${j}`;
            if (hm.has(key)) return hm.get(key);

            let res = 0;
            if (word1[i] === word2[j]) {
                res = helper(i + 1, j + 1);
            } else {
                const insert = helper(i, j + 1);
                const del = helper(i + 1, j);
                const replace = helper(i + 1, j + 1);
                res = 1 + Math.min(insert, del, replace);
            }

            hm.set(key, res);
            return res;
        }
    }
}

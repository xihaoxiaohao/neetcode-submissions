class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const res = [];
        const hm = new Map();
        for (let i = 0; i < S.length; i++) {
            hm.set(S[i], i);
        }

        let start = 0;
        let end = 0;
        for (let i = 0; i < S.length; i++) {
            end = Math.max(end, hm.get(S[i]));
            if (i === end) {
                res.push(end - start + 1);
                start = i + 1;
            }
        }

        return res;
    }
}

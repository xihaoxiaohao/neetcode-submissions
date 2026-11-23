class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        const hm = new Map();
        if (s1.length + s2.length !== s3.length) return false;

        return helper(0, 0);

        function helper(i, j) {
            if (i === s1.length && j === s2.length) {
                return true;
            }

            const key = `${i}-${j}`;
            if (hm.has(key)) {
                return hm.get(key);
            }

            let res = false;
            const k = i + j;

            if (s1[i] === s3[k]) {
                res = helper(i + 1, j);
            }
            if (!res && s2[j] === s3[k]) {
                res = helper(i, j + 1);
            }

            hm.set(key, res);
            return res;
        }
    }
}

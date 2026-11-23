class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p) {
        const m = s.length;
        const n = p.length;
        const hm = new Map();

        return helper(0, 0);

        function helper(i, j) {
            // Both strings are fully matched
            if (j === n) {
                return i === m;
            }

            const key = `${i}-${j}`;
            if (hm.has(key)) return hm.get(key);

            const firstMatch = i < m && (s[i] === p[j] || p[j] === ".");

            let res;

            // Next pattern character is '*'
            if (j + 1 < n && p[j + 1] === "*") {
                // Option 1: Match zero occurrences
                // Option 2: Consume one character from s
                res = helper(i, j + 2) || (firstMatch && helper(i + 1, j));
            } else {
                // No '*': both characters must match
                res = firstMatch && helper(i + 1, j + 1);
            }

            hm.set(key, res);
            return res;
        }
    }
}

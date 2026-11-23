class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const st = [];

        for (const ch of s) {
            if (ch === '(') {
                st.push(')');
            } else if (ch === '{') {
                st.push('}');
            } else if (ch === '[') {
                st.push(']');
            } else if (!st.length || st.length && st.pop() !== ch) {
                return false;
            }
        }

        return st.length === 0;
    }
}

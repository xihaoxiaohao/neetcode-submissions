class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const st = [];

        for (const token of tokens) {
            if (token === '+') {
                const b = st.pop();
                const a = st.pop();
                st.push(a + b);
            } else if (token === '-') {
                const b = st.pop();
                const a = st.pop();
                st.push(a - b);
            } else if (token === '*') {
                const b = st.pop();
                const a = st.pop();
                st.push(a * b);
            } else if (token === '/') {
                const b = st.pop();
                const a = st.pop();
                st.push(Math.trunc(a / b));
            } else {
                st.push(Number(token));
            }
        }
        return st[st.length - 1];
    }
}

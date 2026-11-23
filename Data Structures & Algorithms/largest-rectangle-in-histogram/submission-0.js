class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let res = 0;
        const n = heights.length;
        const st = [];

        for (let i = 0; i <= n; i++) {
            while (st.length && (i === n || heights[st[st.length - 1]] >= heights[i])) {
                const height = heights[st.pop()];
                const width = st.length === 0 ? i : i - st[st.length - 1] - 1;
                res = Math.max(res, height * width);
            }
            st.push(i);
        }

        return res;
    }
}

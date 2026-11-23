class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pairs = position.map((p, i) => [p, speed[i]]);
        pairs.sort((a, b) => b[0] - a[0]);

        const st = [];

        for (const [p, s] of pairs) {
            const time = (target - p) / s;
            st.push(time);
            if (st.length > 1 && time <= st[st.length - 2]) {
                st.pop();
            }
        }

        return st.length;
    }
}

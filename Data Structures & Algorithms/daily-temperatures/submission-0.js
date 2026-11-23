class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = Array(temperatures.length).fill(0);
        const st = [];

        for (let i = 0; i < temperatures.length; i++) {
            const temp = temperatures[i];
            while (st.length > 0 && temp > st[st.length - 1][0]) {
                const [_, idx] = st.pop();
                res[idx] = i - idx;
            }
            st.push([temp, i]);
        }

        return res;
    }
}

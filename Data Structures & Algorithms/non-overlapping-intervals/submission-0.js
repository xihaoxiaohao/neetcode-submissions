class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        let res = 0;
        intervals.sort((a, b) => a[0] - b[0]);
        let preE = intervals[0][1];

        for (let i = 1; i < intervals.length; i++) {
            const [curS, curE] = intervals[i];
            if (curS >= preE) {
                preE = curE;
            } else {
                preE = Math.min(preE, curE);
                res += 1;
            }
        }

        return res;
    }
}

class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        const res = [];
        let [insertS, insertE] = intervals[0];
        for (let i = 1; i < intervals.length; i++) {
            const [curS, curE] = intervals[i];
            if (insertE < curS) {
                res.push([insertS, insertE]);
                insertS = curS;
                insertE = curE;
            } else {
                insertS = Math.min(insertS, curS);
                insertE = Math.max(insertE, curE);
            }
        }
        res.push([insertS, insertE]);
        return res;
    }
}

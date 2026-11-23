class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const res = [];
        let i = 0;
        let [insertS, insertE] = newInterval;
        while (i < intervals.length && intervals[i][1] < insertS) {
            res.push(intervals[i]);
            i += 1;
        }

        while (i < intervals.length && insertE >= intervals[i][0]) {
            insertS = Math.min(intervals[i][0], insertS);
            insertE = Math.max(intervals[i][1], insertE);
            i += 1;
        }
        res.push([insertS, insertE]);

        while (i < intervals.length) {
            res.push(intervals[i]);
            i += 1;
        }

        return res;
    }
}

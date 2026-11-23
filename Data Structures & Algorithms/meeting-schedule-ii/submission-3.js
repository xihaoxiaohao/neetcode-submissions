/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (intervals.length === 0) return 0;
        const time = [];
        for (const { start: s, end: e } of intervals) {
            time.push([s, 1]);
            time.push([e, -1]);
        }
        time.sort((a, b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1];
            } else {
                return a[0] - b[0];
            }
        });

        let res = 0;
        let cnt = 0;
        for (const [_, num] of time) {
            cnt += num;
            res = Math.max(res, cnt);
        }

        return res;
    }
}

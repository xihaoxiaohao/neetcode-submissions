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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        if (intervals.length === 0) return true;
        intervals.sort((a, b) => a.start - b.start);
        let { end: preE } = intervals[0];
        for (let i = 1; i < intervals.length; i++) {
            const { start: curS, end: curE } = intervals[i];
            if (curS < preE) return false;
            preE = curE;
        }
        return true;
    }
}

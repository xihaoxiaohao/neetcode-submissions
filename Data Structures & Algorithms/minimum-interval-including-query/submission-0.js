class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        const res = Array(queries.length).fill(-1);
        intervals.sort((a, b) => a[0] - b[0]);
        const sortedQueries = queries.map((q, i) => [q, i]).sort((a, b) => a[0] - b[0]);

        const minHeap = new PriorityQueue((a, b) => a[0] - b[0]);

        let i = 0;
        for (const [q, queryIdx] of sortedQueries) {
            while (i < intervals.length && intervals[i][0] <= q) {
                const [l, r] = intervals[i];
                minHeap.enqueue([r - l + 1, r]);
                i += 1;
            }

            while (!minHeap.isEmpty() && minHeap.front()[1] < q) {
                minHeap.dequeue();
            }

            res[queryIdx] = minHeap.isEmpty() ? -1 : minHeap.front()[0];
        }

        return res;
    }
}

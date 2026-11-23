class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const maxHeap = new PriorityQueue(
            (a, b) => b[0] * b[0] + b[1] * b[1] - a[0] * a[0] - a[1] * a[1],
        );
        for (const point of points) {
            maxHeap.enqueue(point);
            if (maxHeap.size() > k) {
                maxHeap.dequeue();
            }
        }
        return maxHeap.toArray();
    }
}

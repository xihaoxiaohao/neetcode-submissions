class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const hm = new Map();
        for (const [u, v, w] of times) {
            if (!hm.has(u)) {
                hm.set(u, []);
            }
            hm.get(u).push([v, w]);
        }

        const minHeap = new PriorityQueue((a, b) => a[1] - b[1]);
        minHeap.enqueue([k, 0]);
        const visited = new Set();

        let res = 0;
        while (!minHeap.isEmpty()) {
            const [node, time] = minHeap.dequeue();
            if (visited.has(node)) continue;
            visited.add(node);
            res = time;

            for (const [neighbor, w] of hm.get(node) || []) {
                if (visited.has(neighbor)) continue;
                minHeap.enqueue([neighbor, time + w]);
            }
        }

        return visited.size === n ? res : -1;
    }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new PriorityQueue((a, b) => b - a);

        for (const stone of stones) {
            maxHeap.enqueue(stone);
        }

        while (maxHeap.size() >= 2) {
            const a = maxHeap.dequeue();
            const b = maxHeap.dequeue();
            maxHeap.enqueue(a - b);
        }

        if (maxHeap.size() === 1) return maxHeap.front();
        return 0;
    }
}

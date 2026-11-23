class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hm = new Map();
        for (const num of nums) {
            hm.set(num, (hm.get(num) || 0) + 1);
        }

        const pq = new PriorityQueue((a, b) => hm.get(a) - hm.get(b));
        
        for (const key of hm.keys()) {
            pq.enqueue(key);
            if (pq.size() > k) {
                pq.dequeue();
            }
        }
        return pq.toArray();
    }
}

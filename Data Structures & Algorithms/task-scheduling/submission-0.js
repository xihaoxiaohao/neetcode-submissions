class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const hm = new Map();
        for (const task of tasks) {
            hm.set(task, (hm.get(task) || 0) + 1);
        }

        const maxHeap = new PriorityQueue((a, b) => b - a);
        for (const [_, cnt] of hm) {
            maxHeap.enqueue(cnt);
        }

        let time = 0;
        let queue = [];

        while (maxHeap.size() > 0 || queue.length > 0) {
            time += 1;

            if (maxHeap.size() > 0) {
                const cnt = maxHeap.dequeue() - 1;
                if (cnt > 0) {
                    queue.push([cnt, time + n]);
                }
            }

            if (queue.length > 0 && queue[0][1] === time) {
                maxHeap.enqueue(queue.shift()[0]);
            }
        }

        return time;
    }
}

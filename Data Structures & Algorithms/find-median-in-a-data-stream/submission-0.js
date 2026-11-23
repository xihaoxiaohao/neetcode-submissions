class MedianFinder {
    constructor() {
        this.maxHeap = new PriorityQueue((a, b) => b - a);
        this.minHeap = new PriorityQueue((a, b) => a - b);
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.maxHeap.enqueue(num);

        if (this.minHeap.size() && this.maxHeap.front() > this.minHeap.front()) {
            this.minHeap.enqueue(this.maxHeap.dequeue());
            this.maxHeap.enqueue(this.minHeap.dequeue());
        }

        if (this.maxHeap.size() - this.minHeap.size() > 1) {
            this.minHeap.enqueue(this.maxHeap.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.maxHeap.size() === this.minHeap.size()) {
            return (this.maxHeap.front() + this.minHeap.front()) / 2;
        } else {
            return this.maxHeap.front();
        }
    }
}

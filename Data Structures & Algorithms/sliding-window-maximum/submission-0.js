class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const res = Array(nums.length - k + 1);
        const q = new Deque();

        let start = 0;
        for (let end = 0; end < nums.length; end++) {
            while (q.size() && nums[q.back()] < nums[end]) {
                q.popBack();
            }
            q.pushBack(end);

            if (start > q.front()) {
                q.popFront();
            }

            if (end + 1 >= k) {
                res[start] = nums[q.front()];
                start += 1;
            }
        }

        return res;
    }
}

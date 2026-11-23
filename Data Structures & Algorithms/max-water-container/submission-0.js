class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0;
        let left = 0;
        let right = heights.length - 1;
        while (left < right) {
            const area = (right - left) * Math.min(heights[left], heights[right]);
            res = Math.max(res, area);
            if (heights[left] < heights[right]) {
                left += 1;
            } else {
                right -= 1;
            }
        }
        return res;
    }
}

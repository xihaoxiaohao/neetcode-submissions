class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;
        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            if (nums[mid] < nums[right]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return nums[left];
    }
}

// 3, 4, 5, 6, 1, 2
// 4, 5, 6, 1, 2, 3
// 5, 6, 1, 2, 3, 4
// 6, 1, 2, 3, 4, 5
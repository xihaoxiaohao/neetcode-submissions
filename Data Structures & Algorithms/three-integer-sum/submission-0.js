class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        return this.nSum(nums, 3, 0, 0);
    }

    nSum(nums, n, target, startIdx) {
        if (n === 2) return this.twoSum(nums, target, startIdx);

        const res = [];
        for (let i = startIdx; i < nums.length; i++) {
            if (i > startIdx && nums[i] === nums[i-1]) continue;
            const cur = nums[i];
            const lsts = this.nSum(nums, n - 1, target - cur, i+1);
            for (const lst of lsts) {
                res.push([cur, ...lst]);
            }
        }

        return res;
    }

    twoSum(nums, target, startIdx) {
        const res = [];
        let left = startIdx;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[left] + nums[right];
            if (sum === target) {
                res.push([nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left+1]) left += 1;
                while (left < right && nums[right] === nums[right-1]) right -= 1;
                left += 1;
                right -= 1;
            } else if (sum < target) {
                left += 1;
            } else {
                right -= 1;
            }
        }
        return res;
    }
}

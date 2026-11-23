class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1;
        let B = nums2;
        const total = A.length + B.length;
        const half = Math.floor((total + 1) / 2);

        if (A.length > B.length) {
            [A, B] = [B, A];
        }

        let left = 0;
        let right = A.length;

        while (left <= right) {
            const partitionA = left + Math.floor((right - left) / 2);
            const partitionB = half - partitionA;

            const maxLeftA = partitionA === 0 ? -Infinity : A[partitionA - 1];
            const minRightA = partitionA === A.length ? Infinity : A[partitionA];

            const maxLeftB = partitionB === 0 ? -Infinity : B[partitionB - 1];
            const minRightB = partitionB === B.length ? Infinity : B[partitionB];

            if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
                if (total % 2 !== 0) {
                    return Math.max(maxLeftA, maxLeftB);
                } else {
                    return (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;
                }
            } else if (maxLeftA > minRightB) {
                right = partitionA - 1;
            } else {
                left = partitionA + 1;
            }
        }

        return -1;
    }
}

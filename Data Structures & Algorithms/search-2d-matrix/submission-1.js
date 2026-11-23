class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const row = matrix.length;
        const col = matrix[0].length;
        let left = 0;
        let right = row * col - 1;

        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            const midNum = matrix[Math.floor(mid / col)][Math.floor(mid % col)];
            if (midNum === target) {
                return true;
            } else if (midNum < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return matrix[Math.floor(left / col)][Math.floor(left % col)] === target;
    }
}

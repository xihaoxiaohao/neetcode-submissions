class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        let n = matrix.length;
        let top = 0;
        let bottom = matrix.length - 1;
        let left = 0;
        let right = matrix[0].length - 1;

        while (n > 1) {
            for (let i = 0; i < n - 1; i++) {
                let temp = matrix[top][left+i];
                matrix[top][left+i] = matrix[bottom-i][left];
                matrix[bottom-i][left] = matrix[bottom][right-i];
                matrix[bottom][right-i] = matrix[top+i][right];
                matrix[top+i][right] = temp
            }
            top += 1;
            bottom -= 1;
            left += 1;
            right -= 1;
            n -= 2;
        }
    }
}

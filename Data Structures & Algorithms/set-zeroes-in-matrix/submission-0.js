class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const row = matrix.length;
        const col = matrix[0].length;
        let zeroRow = false;
        let zeroCol = false;

        for (let i = 0; i < col; i++) {
            if (matrix[0][i] === 0) {
                zeroRow = true;
                break;
            }
        }
        for (let i = 0; i < row; i++) {
            if (matrix[i][0] === 0) {
                zeroCol = true;
                break;
            }
        }

        for (let r = 1; r < row; r++) {
            for (let c = 1; c < col; c++) {
                if (matrix[r][c] === 0) {
                    matrix[0][c] = 0;
                    matrix[r][0] = 0;
                }
            }
        }

        for (let r = 1; r < row; r++) {
            for (let c = 1; c < col; c++) {
                if (matrix[0][c] === 0 || matrix[r][0] === 0) {
                    matrix[r][c] = 0;
                }
            }
        }

        if (zeroRow) {
            for (let c = 0; c < col; c++) {
                matrix[0][c] = 0;
            }
        }
        if (zeroCol) {
            for (let r = 0; r < row; r++) {
                matrix[r][0] = 0;
            }
        }
    }
}

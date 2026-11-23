class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        while (a !== 0) {
            let x = a ^ b;
            let c = (a & b) << 1;
            a = c;
            b = x;
        }
        return b;
    }
}

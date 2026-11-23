class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {
        if (num1 === "0" || num2 === "0") return "0";

        const num1Len = num1.length;
        const num2Len = num2.length;
        const res = Array(num1Len + num2Len).fill(0);

        for (let i = num1Len - 1; i >= 0; i--) {
            for (let j = num2Len - 1; j >= 0; j--) {
                const mul = (num1[i] - "0") * (num2[j] - "0");
                const sum = res[i + j + 1] + mul;
                res[i + j + 1] = sum % 10;
                res[i + j] += Math.floor(sum / 10);
            }
        }

        return res.join("").replace(/^0+/, "");
    }
}

class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let res = 0;
        const gasSum = gas.reduce((acc, cur) => acc + cur, 0);
        const costSum = cost.reduce((acc, cur) => acc + cur, 0);
        if (gasSum < costSum) return -1;

        let total = 0;
        for (let i = 0; i < gas.length; i++) {
            total += gas[i] - cost[i];
            if (total < 0) {
                total = 0;
                res = i + 1;
            }
        }

        return res;
    }
}

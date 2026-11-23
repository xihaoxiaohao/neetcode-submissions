class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = 0;
        const hs = new Set();
        for (const num of nums) {
            hs.add(num);
        }
        for (const num of hs) {
            if (hs.delete(num)) {
                let pre = num - 1;
                let nex = num + 1;
                while (hs.delete(pre)) pre -= 1;
                while (hs.delete(nex)) nex += 1;
                res = Math.max(res, nex - pre - 1);
            }
        }

        return res;
    }
}

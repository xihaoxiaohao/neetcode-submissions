class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        const res = [false, false, false];

        for (const triplet of triplets) {
            if (triplet[0] > target[0] || triplet[1] > target[1] || triplet[2] > target[2]) {
                continue;
            }

            for (let i = 0; i < 3; i++) {
                if (triplet[i] === target[i]) {
                    res[i] = true;
                }
            }
        }

        return res.every(Boolean);
    }
}

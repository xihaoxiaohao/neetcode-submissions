class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        const n = hand.length;
        if (n % groupSize !== 0) return false;

        hand.sort((a, b) => a - b);

        const hm = new Map();
        for (const card of hand) {
            hm.set(card, (hm.get(card) || 0) + 1);
        }

        for (const card of hand) {
            if (hm.get(card) === 0) continue;
            for (let i = 0; i < groupSize; i++) {
                const potentialCard = card + i;
                if (!hm.has(potentialCard) || hm.get(potentialCard) === 0) return false;
                hm.set(potentialCard, hm.get(potentialCard) - 1);
            }
        }

        return true;
    }
}

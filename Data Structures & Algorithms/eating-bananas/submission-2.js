class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = piles.reduce((pre, cur) => pre + cur, 0);
        let res = 1;

        function getHour(rate) {
            let cnt = 0;
            for (let i = 0; i < piles.length; i++) {
                const curPile = piles[i];
                cnt += Math.ceil(curPile / rate);
            }
            return cnt;
        }
         
        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            const hr = getHour(mid);
            if (hr <= h) {
                res = mid;
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return getHour(left) <= h ? left : -1;
    }
}

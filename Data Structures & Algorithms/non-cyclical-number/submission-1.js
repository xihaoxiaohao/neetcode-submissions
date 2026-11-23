class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let slow = n;
        let fast = getNext(getNext(n));

        while (slow !== fast) {
            slow = getNext(slow);
            fast = getNext(getNext(fast));
        }

        return slow === 1;

        function getNext(n) {
            let sum = 0;
            while (n > 0) {
                const digit = n % 10;
                sum += digit * digit;
                n = Math.floor(n / 10);
            }
            return sum;
        }
    }
}

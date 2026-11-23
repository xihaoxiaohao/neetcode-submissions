class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];
        const cur = [];
        helper(0, cur);
        return res;

        function helper(startIdx, cur) {
            if (startIdx === s.length) {
                res.push([...cur]);
                return;
            }

            for (let i = startIdx; i < s.length; i++) {
                const str = s.slice(startIdx, i+1);
                if (isPalindrome(str)) {
                    helper(i+1, [...cur, str]);
                }
            }
        }

        function isPalindrome(s) {
            let left = 0;
            let right = s.length - 1;
            while (left < right) {
                if (s[left] !== s[right]) {
                    return false;
                }
                left += 1;
                right -= 1;
            }
            return true;
        }
    }
}

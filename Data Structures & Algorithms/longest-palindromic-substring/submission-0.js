class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        if (s.length === 1) return s;
        let n = s.length;
        let resLen = 0;
        let resStartIdx = 0;

        for (let i = 0; i < n; i++) {
            // odd len
            let left = i;
            let right = i;
            while (left >= 0 && right < n && s[left] === s[right]) {
                if (right - left + 1 > resLen) {
                    resLen = right - left + 1;
                    resStartIdx = left;
                }
                left -= 1;
                right += 1;
            }

            // even len
            left = i;
            right = i + 1;
            while (left >= 0 && right < n && s[left] === s[right]) {
                if (right - left + 1 > resLen) {
                    resLen = right - left + 1;
                    resStartIdx = left;
                }
                left -= 1;
                right += 1;
            }
        }

        return s.substring(resStartIdx, resStartIdx + resLen);
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;
        while (left < right) {
            while (left < right && !this.helper(s[left])) left += 1;
            while (left < right && !this.helper(s[right])) right -= 1;
            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
            left += 1;
            right -= 1;
        }
        return true;
    }

    helper(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }
}

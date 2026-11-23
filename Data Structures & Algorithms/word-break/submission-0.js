class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const set = new Set(wordDict);
        const dp = Array(s.length+1).fill(false);
        dp[0] = true;

        for (let i = 1; i < dp.length; i++) {
            for (const word of wordDict) {
                const secondHalfWord = s.slice(i-word.length, i);
                if (secondHalfWord === word && dp[i-word.length]) {
                    dp[i] = true;
                }
            }
        }

        return dp[dp.length - 1];
    }
}

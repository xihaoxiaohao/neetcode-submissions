class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        let res = 1;
        const wordSet = new Set(wordList);

        if (!wordSet.has(endWord)) return 0;

        const queue = [beginWord];

        while (queue.length) {
            for (let i = queue.length - 1; i >= 0; i--) {
                const curWord = queue.shift();
                if (curWord === endWord) return res;

                for (let i = 0; i < curWord.length; i++) {
                    for (let j = 97; j < 97 + 26; j++) {
                        const newStr =
                            curWord.slice(0, i) +
                            String.fromCharCode(j) +
                            curWord.slice(i + 1, curWord.length);

                        if (wordSet.has(newStr)) {
                            queue.push(newStr);
                            wordSet.delete(newStr);
                        }
                    }
                }
            }
            res += 1;
        }

        return 0;
    }
}

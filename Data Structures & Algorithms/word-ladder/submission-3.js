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

        let head = 0;
        while (head < queue.length) {
            const size = queue.length - head;

            for (let i = 0; i < size; i++) {
                const curWord = queue[head++];
                if (curWord === endWord) return res;

                for (let j = 0; j < curWord.length; j++) {
                    for (let k = 97; k < 97 + 26; k++) {
                        const newStr =
                            curWord.slice(0, j) +
                            String.fromCharCode(k) +
                            curWord.slice(j + 1, curWord.length);

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

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
                wordSet.delete(curWord);

                const wordArr = curWord.split("");
                for (let i = 0; i < wordArr.length; i++) {
                    const oriChar = wordArr[i];
                    for (let j = 97; j < 97 + 26; j++) {
                        const newChar = String.fromCharCode(j);
                        if (newChar === oriChar) continue;
                        wordArr[i] = newChar;
                        const newStr = wordArr.join("");
                        if (!wordSet.has(newStr)) continue;
                        queue.push(newStr);
                    }
                    wordArr[i] = oriChar;
                }
            }
            res += 1;
        }

        return 0;
    }
}

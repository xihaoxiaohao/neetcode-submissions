class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const adjLst = new Map();
        const inDegree = new Map();
        for (const w of words) {
            for (const c of w) {
                adjLst.set(c, new Set());
                inDegree.set(c, 0);
            }
        }

        for (let i = 0; i < words.length - 1; i++) {
            const w1 = words[i];
            const w2 = words[i+1];
            const minLen = Math.min(w1.length, w2.length);
            if (w1.slice(0, minLen) === w2.slice(0, minLen) &&
                w1.length > w2.length
            ){
                return '';
            }

            for (let j = 0; j < minLen; j++) {
                if (w1[j] !== w2[j]) {
                    const ch1 = w1[j];
                    const ch2 = w2[j];
                    if (!adjLst.get(ch1).has(ch2)) {
                        adjLst.get(ch1).add(ch2);
                        inDegree.set(ch2, inDegree.get(ch2) + 1);
                    }
                    break;
                }
            }
        }

        const queue = [];
        for (const [ch, degree] of inDegree) {
            if (degree === 0) {
                queue.push(ch)
            }
        }

        const res = [];
        while (queue.length > 0) {
            const ch = queue.shift();
            res.push(ch);
            for (const neighbor of adjLst.get(ch)) {
                inDegree.set(neighbor, inDegree.get(neighbor) - 1);
                if (inDegree.get(neighbor) === 0) {
                    queue.push(neighbor);
                }
            }
        }

        if (res.length !== inDegree.size) return '';
        return res.join('');
    }
}

class TrieNode {
    constructor() {
        this.children = new Map();
        this.end = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let cur = this.root;
        for (const ch of word) {
            if (!cur.children.has(ch)) {
                cur.children.set(ch, new TrieNode());
            }
            cur = cur.children.get(ch);
        }
        cur.end = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.helper(word, 0, this.root);
    }

    helper(word, startIdx, root) {
        let cur = root;

        for (let i = startIdx; i < word.length; i++) {
            const ch = word[i];
            if (ch === '.') {
                for (const child of cur.children.values()) {
                    if (this.helper(word, i + 1, child)) {
                        return true;
                    }
                }
                return false;
            } else {
                if (!cur.children.has(ch)) return false;
                cur = cur.children.get(ch);
            }
        }
        return cur.end;
    }
 }

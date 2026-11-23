class TrieNode {
    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let cur = this.root;
        for (let ch of word) {
            if (!cur.children.has(ch)) {
                cur.children.set(ch, new TrieNode());
            }
            cur = cur.children.get(ch);
        }
        cur.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let cur = this.root;
        for (const ch of word) {
            if (!cur.children.has(ch)) return false;
            cur = cur.children.get(ch);
        }
        return cur.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let cur = this.root;
        for (const ch of prefix) {
            if (!cur.children.has(ch)) return false;
            cur = cur.children.get(ch);
        }
        return true;
    }
}

class TrieNode {
    constructor() {
        this.children = new Map();
        this.isWord = false;
    }

    addWord(word) {
        let cur = this;
        for (const ch of word) {
            if (!cur.children.has(ch)) {
                cur.children.set(ch, new TrieNode());
            }
            cur = cur.children.get(ch);
        }
        cur.isWord = true;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const root = new TrieNode();
        for (const word of words) {
            root.addWord(word);
        }

        const row = board.length;
        const col = board[0].length;
        const res = new Set();
        const visited = new Set();

        const helper = (r, c, node, word) => {
            if (r < 0 ||
                c < 0 ||
                r >= row ||
                c >= col ||
                visited.has(`${r},${c}`) ||
                !node.children.has(board[r][c])
            ) {
                return;
            }

            visited.add(`${r},${c}`);
            node = node.children.get(board[r][c]);
            word += board[r][c];
            if (node.isWord) {
                res.add(word);
            }

            helper(r + 1, c, node, word);
            helper(r - 1, c, node, word);
            helper(r, c + 1, node, word);
            helper(r, c - 1, node, word);
            visited.delete(`${r},${c}`);
        }

        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                helper(r, c, root, '');
            }
        }

        return Array.from(res);
    }
}

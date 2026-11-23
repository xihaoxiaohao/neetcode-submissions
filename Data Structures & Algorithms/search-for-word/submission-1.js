class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const row = board.length;
        const col = board[0].length;

        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (board[r][c] !== word[0]) continue;
                if (this.helper(board, word, 0, new Set(), r, c)) return true;
            }
        }

        return false;
    }

    helper(board, word, idx, visited, r, c) {
        if (idx >= word.length) return true;
        if (r < 0 || r >= board.length || c < 0 || c >= board[0].length) return false;
        if (board[r][c] !== word[idx]) return false;

        const key = `${r},${c}`;
        if (visited.has(key)) return false;

        visited.add(key);

        const dirs = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;
            const hasWord = this.helper(board, word, idx + 1, visited, nr, nc);
            if (hasWord) return true;
        }
        visited.delete(key);
        return false;
    }
}

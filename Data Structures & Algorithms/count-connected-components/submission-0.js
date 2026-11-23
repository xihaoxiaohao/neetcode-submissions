class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let res = 0;
        const adjLst = new Map();
        const visited = Array(n).fill(false);

        for (let i = 0; i < n; i++) {
            adjLst.set(i, new Set());
        }

        for (const [u, v] of edges) {
            adjLst.get(u).add(v);
            adjLst.get(v).add(u);
        }

        const helper = (v) => {
            if (visited[v]) return false;
            visited[v] = true;
            for (const neighbor of adjLst.get(v)) {
                helper(neighbor);
            }
        };

        for (let i = 0; i < n; i++) {
            if (visited[i]) continue;
            res += 1;
            helper(i);
        }

        return res;
    }
}

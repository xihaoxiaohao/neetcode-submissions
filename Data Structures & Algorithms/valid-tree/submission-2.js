class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n - 1) return false;
        const visited = new Set();
        const adjLst = new Map();
        for (const [u, v] of edges) {
            if (!adjLst.has(u)) adjLst.set(u, new Set());
            if (!adjLst.has(v)) adjLst.set(v, new Set());
            adjLst.get(u).add(v);
            adjLst.get(v).add(u);
        }

        if (!this.helper(0, -1, visited, adjLst)) return false;
        return visited.size === n;
    }

    helper(node, parent, visited, adjLst) {
        if (visited.has(node)) return false;
        visited.add(node);

        for (const neighbor of adjLst.get(node) || []) {
            if (neighbor === parent) continue;
            if (!this.helper(neighbor, node, visited, adjLst)) {
                return false;
            }
        }

        return true;
    }
}

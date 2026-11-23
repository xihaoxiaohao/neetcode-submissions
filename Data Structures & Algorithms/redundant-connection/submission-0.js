class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const adjLst = new Map();
        const inDegree = new Map();
        for (const [u, v] of edges) {
            if (!adjLst.has(u)) adjLst.set(u, []);
            if (!adjLst.has(v)) adjLst.set(v, []);
            adjLst.get(u).push(v);
            adjLst.get(v).push(u);
            inDegree.set(u, (inDegree.get(u) || 0) + 1);
            inDegree.set(v, (inDegree.get(v) || 0) + 1);
        }

        const queue = [];
        for (const [k, v] of inDegree) {
            if (v === 1) {
                queue.push(k);
            }
        }

        let head = 0;
        while (head < queue.length) {
            const cur = queue[head++];
            inDegree.set(cur, inDegree.get(cur) - 1);
            for (const neighbor of adjLst.get(cur)) {
                inDegree.set(neighbor, inDegree.get(neighbor) - 1);
                if (inDegree.get(neighbor) === 1) {
                    queue.push(neighbor);
                }
            }
        }

        for (let i = edges.length - 1; i >= 0; i--) {
            const [u, v] = edges[i];
            if (inDegree.get(u) > 0 && inDegree.get(v) > 0) {
                return [u, v];
            }
        }

        return [];
    }
}

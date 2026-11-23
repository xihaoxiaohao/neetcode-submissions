class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        const res = [];
        const adjLst = new Map();
        for (const [src, dst] of tickets) {
            if (!adjLst.has(src)) {
                adjLst.set(src, []);
            }
            adjLst.get(src).push(dst);
        }

        for (const neighbors of adjLst.values()) {
            neighbors.sort();
        }

        helper("JFK");

        return res.reverse();

        function helper(node) {
            const neighbors = adjLst.get(node);
            while (neighbors && neighbors.length) {
                const neighbor = neighbors.shift();
                helper(neighbor);
            }
            res.push(node);
        }
    }
}

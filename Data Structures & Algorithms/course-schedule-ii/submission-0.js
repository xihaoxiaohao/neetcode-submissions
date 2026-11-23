class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const res = [];
        const adjLst = new Map();
        const inDegree = new Map();
        for (let i = 0; i < numCourses; i++) {
            inDegree.set(i, 0);
        }
        for (const [a, b] of prerequisites) {
            if (!adjLst.has(b)) {
                adjLst.set(b, []);
            }
            adjLst.get(b).push(a);
            inDegree.set(a, inDegree.get(a) + 1);
        }

        const queue = [];
        for (const [k, v] of inDegree) {
            if (v === 0) {
                queue.push(k);
            }
        }

        console.log(queue);

        let head = 0;
        while (head < queue.length) {
            const cur = queue[head++];
            res.push(cur);
            for (const neighbor of adjLst.get(cur) || []) {
                inDegree.set(neighbor, inDegree.get(neighbor) - 1);
                if (inDegree.get(neighbor) === 0) {
                    queue.push(neighbor);
                }
            }
        }

        return res.length === numCourses ? res : [];
    }
}

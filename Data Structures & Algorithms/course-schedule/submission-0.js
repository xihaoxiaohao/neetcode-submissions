class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adjLst = new Map();
        const inDegree = new Map();
        for (let i = 0; i < numCourses; i++) {
            adjLst.set(i, new Set());
            inDegree.set(i, 0);
        }

        for (const [des, src] of prerequisites) {
            adjLst.get(src).add(des);
            inDegree.set(des, inDegree.get(des) + 1);
        }

        const queue = [];
        for (const [k, v] of inDegree) {
            if (v === 0) {
                queue.push(k);
            }
        }

        const resLst = [];
        while (queue.length) {
            const cur = queue.shift();
            resLst.push(cur);
            for (const neighbor of (adjLst.get(cur) || [])) {
                inDegree.set(neighbor, inDegree.get(neighbor) - 1);
                if (inDegree.get(neighbor) === 0) {
                    queue.push(neighbor);
                }
            }
        }
        return resLst.length === numCourses;
    }
}

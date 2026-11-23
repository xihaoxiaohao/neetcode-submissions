class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        let res = 0;
        let edges = 0;
        const n = points.length;
        const dist = Array(n).fill(Infinity);
        const visited = Array(n).fill(false);
        let node = 0;

        while (edges < n - 1) {
            visited[node] = true;
            let nextNode = -1;
            for (let i = 0; i < n; i++) {
                if (visited[i]) continue;
                const curDist =
                    Math.abs(points[i][0] - points[node][0]) +
                    Math.abs(points[i][1] - points[node][1]);
                dist[i] = Math.min(dist[i], curDist);
                if (nextNode === -1 || dist[i] < dist[nextNode]) {
                    nextNode = i;
                }
            }

            res += dist[nextNode];
            node = nextNode;
            edges += 1;
        }

        return res;
    }
}

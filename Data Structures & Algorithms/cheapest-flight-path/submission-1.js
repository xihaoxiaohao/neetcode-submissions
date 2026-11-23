class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        const INF = Infinity;
        const adj = Array.from({ length: n }, () => []);

        for (const [u, v, cost] of flights) {
            adj[u].push([v, cost]);
        }

        // dist[node][flights] = minimum cost to reach node
        // using exactly this many flights
        const dist = Array.from({ length: n }, () => Array(k + 2).fill(INF));

        dist[src][0] = 0;

        const minHeap = new PriorityQueue((a, b) => a[0] - b[0]);

        // cost, node, flights used
        minHeap.push([0, src, 0]);

        while (!minHeap.isEmpty()) {
            const [cost, node, flightsUsed] = minHeap.dequeue();

            // Destination reached with minimum cost
            if (node === dst) return cost;

            // Skip stale heap entries
            if (cost > dist[node][flightsUsed]) continue;

            // Cannot take more than k + 1 flights
            if (flightsUsed === k + 1) continue;

            for (const [nei, price] of adj[node]) {
                const nextCost = cost + price;
                const nextFlights = flightsUsed + 1;

                if (nextCost < dist[nei][nextFlights]) {
                    dist[nei][nextFlights] = nextCost;

                    minHeap.push([nextCost, nei, nextFlights]);
                }
            }
        }

        return -1;
    }
}

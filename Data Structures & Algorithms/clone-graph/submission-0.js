/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const oldToNew = new Map();
        return this.helper(node, oldToNew);
    }

    helper(node, oldToNew) {
        if (!node) return null;
        if (oldToNew.has(node)) {
            return oldToNew.get(node);
        }
        
        const newNode = new Node(node.val);
        oldToNew.set(node, newNode);

        for (const neighbor of node.neighbors) {
            newNode.neighbors.push(this.helper(neighbor, oldToNew));
        }
        return newNode;
    }
}

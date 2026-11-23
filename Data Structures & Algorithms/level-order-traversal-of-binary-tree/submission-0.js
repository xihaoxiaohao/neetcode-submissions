/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        const res = [];
        if (!root) return res;
        const queue = [root]
        while (queue.length) {
            const cur = [];
            for (let i = queue.length - 1; i >= 0; i--) {
                const node = queue.shift();
                cur.push(node.val);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            res.push(cur);
        }
        return res;
    }
}

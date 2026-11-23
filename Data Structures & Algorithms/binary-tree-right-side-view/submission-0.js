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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return [];
        const res = [];
        const queue = [root];

        while (queue.length) {
            for (let i = queue.length - 1; i >= 0; i--) {
                const cur = queue.shift();
                if (i === 0) res.push(cur.val);
                if (cur.left) queue.push(cur.left);
                if (cur.right) queue.push(cur.right);
            }
        }

        return res;
    }
}

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
     * @return {number}
     */
    goodNodes(root) {
        if (!root) return 0;
        return helper(root, root.val);

        function helper(node, maxParent) {
            if (!node) return 0;
            let res = 0;

            if (node.val >= maxParent) {
                res += 1;
            }
            const newMax = Math.max(node.val, maxParent);

            res += helper(node.left, newMax);
            res += helper(node.right, newMax);
            return res;
        }
    }
}

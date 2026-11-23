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
        let res = 0;

        helper(root, -Infinity);

        function helper(node, parent) {
            if (!node) return;
            let newParent = parent;
            
            if (node.val >= parent) {
                res += 1;
                newParent = node.val;
            }

            helper(node.left, newParent);
            helper(node.right, newParent);
        }

        return res;
    }
}

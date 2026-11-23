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
    diameterOfBinaryTree(root) {
        if (!root) return 0;
        let res = 0;

        getHeight(root);

        function getHeight(root) {
            if (!root) return 0;

            const leftHeight = getHeight(root.left);
            const rightHeight = getHeight(root.right);

            res = Math.max(res, leftHeight + rightHeight);

            return 1 + Math.max(leftHeight, rightHeight);
        }

        return res;
    }
}

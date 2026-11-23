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
     * @return {boolean}
     */
    isBalanced(root) {
        const [isBalanced, _] = helper(root);

        function helper(node) {
            if (!node) return [true, 0];

            const [leftBalanced, leftHeight] = helper(node.left);
            const [rightBalanced, rightHeight] = helper(node.right);

            const height = 1 + Math.max(leftHeight, rightHeight);
            const isBalanced =
                Math.abs(leftHeight - rightHeight) <= 1 && leftBalanced && rightBalanced;
            return [isBalanced, height];
        }

        return isBalanced;
    }
}

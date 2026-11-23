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
        const leftHeight = this.getHeight(root.left);
        const rightHeight = this.getHeight(root.right);
        const rootDiameter = leftHeight + rightHeight;
        const leftDiameter = this.diameterOfBinaryTree(root.left);
        const rightDiameter = this.diameterOfBinaryTree(root.right);
        return Math.max(rootDiameter, leftDiameter, rightDiameter);
    }

    getHeight(root) {
        if (!root) return 0;
        return 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
    }
}

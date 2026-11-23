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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!subRoot) return true;
        if (!root) return false;
        if (this.isSametree(root, subRoot)) return true;
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isSametree(r1, r2) {
        if (!r1 && !r2) return true;
        if (!r1 || !r2) return false;
        if (r1.val !== r2.val) return false;
        return this.isSametree(r1.left, r2.left) && this.isSametree(r1.right, r2.right);
    }
}

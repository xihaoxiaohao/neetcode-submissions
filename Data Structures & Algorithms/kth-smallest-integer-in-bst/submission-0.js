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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const lst = [];
        const helper = (root) => {
            if (!root) return;
            helper(root.left);
            lst.push(root.val);
            helper(root.right);
        };
        helper(root);
        return lst[k - 1];
    }
}

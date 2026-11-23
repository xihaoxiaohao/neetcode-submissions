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
    maxPathSum(root) {
        let res = -Infinity;
        
        const helper = (node) => {
            if (!node) return -Infinity;
            const singleLeftPath = helper(node.left);
            const singleRightPath = helper(node.right);
            const singlePath = node.val + Math.max(0, singleLeftPath, singleRightPath);
            const bothPath = node.val + Math.max(0, singleLeftPath + singleRightPath);
            res = Math.max(res, singlePath, bothPath);
            return singlePath;
        }

        helper(root);
        return res;
    }
}

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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        return this.helper(preorder, inorder, 0, preorder.length - 1, 0, inorder.length - 1);
    }

    helper(preorder, inorder, preStart, preEnd, inStart, inEnd) {
        if (preStart > preEnd || inStart > inEnd) return null;
        const root = new TreeNode(preorder[preStart]);
        let i = inStart;
        while (i < inEnd) {
            if (inorder[i] === preorder[preStart]) break;
            i += 1;
        }
        root.left = this.helper(preorder, inorder, preStart + 1, preEnd, inStart, i - 1);
        root.right = this.helper(preorder, inorder, preStart + (i - inStart) + 1, preEnd, i+1, inEnd);
        return root;
    }
}

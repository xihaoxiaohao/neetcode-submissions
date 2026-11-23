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
        const s1 = this.serialize(root);
        const s2 = this.serialize(subRoot);
        return s1.includes(s2);
    }

    serialize(root) {
        const res = [];

        const dfs = (node) => {
            if (!node) {
                res.push("$#");
                return;
            }
            res.push("$");
            res.push(node.val.toString());
            dfs(node.left);
            dfs(node.right);
        };

        dfs(root);
        return res.join("");
    }
}

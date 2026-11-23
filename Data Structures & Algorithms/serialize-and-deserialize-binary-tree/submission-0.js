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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const res = [];
        const helper = (node) => {
            if (!node) {
                res.push("#");
                return;
            }
            res.push(String(node.val));
            helper(node.left);
            helper(node.right);
        };

        helper(root);
        return res.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let i = 0;
        const values = data.split(",");

        const helper = () => {
            if (values[i] === "#") {
                i += 1;
                return null;
            }

            const root = new TreeNode(values[i]);
            i += 1;
            root.left = helper();
            root.right = helper();
            return root;
        };

        return helper();
    }
}

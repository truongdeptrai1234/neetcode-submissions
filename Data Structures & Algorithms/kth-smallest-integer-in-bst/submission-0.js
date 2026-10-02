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
        const result = [];
        let prev = null;

        function inorder(root) {
            if (!root) return;

            inorder(root.left);
            result.push(root.val);
            inorder(root.right);
        }
        inorder(root)
        return result[k - 1];
    }
}

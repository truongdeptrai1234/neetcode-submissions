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

    const queue = [root];
    let i = 0;

    while (i < queue.length) {
        const node = queue[i++];

        // Potential starting point
        if (node.val === subRoot.val) {
            if (this.isSameTree(node, subRoot)) {
                return true;
            }
        }

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return false;
    }

    isSameTree(p, q) {
    const queue = [[p, q]];
    let i = 0;

    while (i < queue.length) {
        const [node1, node2] = queue[i++];

        if (!node1 && !node2) continue;

        if (!node1 || !node2 || node1.val !== node2.val) {
            return false;
        }

        queue.push([node1.left, node2.left]);
        queue.push([node1.right, node2.right]);
    }

    return true;
    }
}

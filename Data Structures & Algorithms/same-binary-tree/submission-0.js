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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        
    const queue = [[p, q]];
    let i = 0;

    while (i < queue.length) {
        const [node1, node2] = queue[i++];

        // Both are null
        if (!node1 && !node2) continue;

        // One is null, or values are different
        if (!node1 || !node2 || node1.val !== node2.val) {
            return false;
        }

        queue.push([node1.left, node2.left]);
        queue.push([node1.right, node2.right]);
    }

    return true;
    }
}

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
     * @return {number[][]}
     */
    levelOrder(root) {
        
    if (!root) return [];

    const result = [];
    const queue = [root];

    let i = 0;

    while (i < queue.length) {
        const levelSize = queue.length - i;
        const level = [];

        for (let j = 0; j < levelSize; j++) {
            const node = queue[i++];

            level.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(level);
    }

    return result;
    }
}

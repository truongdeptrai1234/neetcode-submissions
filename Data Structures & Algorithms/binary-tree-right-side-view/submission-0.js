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
     * @return {number[]}
     */
    rightSideView(root) {
        let result=[];
        if(!root) return result;

        const queue=[root]
        let i=0;
        while(i<queue.length){
            let level=[];
            let levelSize=queue.length-i;
            for(let j=0;j<levelSize;j++){
                const node=queue[i++];
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
                level.push(node.val)
            }
            result.push(level.pop());
        }
        return result;
    }
}

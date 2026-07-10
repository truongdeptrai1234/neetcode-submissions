/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let cur=head;
        let index=0;
        while(cur){
            if(cur.next?.index!==undefined) return true;
            cur=cur.next;
            if(cur!==null) cur.index=index+1;
        }
        return false;
    }
}

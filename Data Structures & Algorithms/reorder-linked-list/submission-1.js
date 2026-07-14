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
     * @return {void}
     */
    reorderList(head) {
        let tail=head;
        let cur=head;
        
        while(tail.next){
            let temp=tail;
            tail=tail.next;
            tail.prev=temp;
        }
        while(cur){
            let temp=cur.next;
            if(temp?.val===tail.val || cur.val===tail.val) {
                tail.next=null;
                break;
            }
            cur.next=tail;
            tail.next=temp;
            cur=temp;
            tail=tail.prev;
        }
    }
}

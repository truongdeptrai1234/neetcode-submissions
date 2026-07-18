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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let tail=head,cur=head;
        let totalIndex=1;
        while(tail){
            tail.index=totalIndex;
            tail=tail.next;
            totalIndex++;
        }
        if(n>=totalIndex) return head;
        console.log(cur);
        while(cur.next?.index!==totalIndex-n){
            if(cur.index===totalIndex-n) {
                head=head.next;
                break;
            }
            cur=cur.next;
        }
        cur.next=cur.next?.next;
        return head;
    }
}

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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let head=null,cur,next;
        if(!list1) return head=list2;
        if(!list2) return head=list1;
        if(!list1 && !list2) return head;

        if(list1.val<=list2.val){
            head=list1;
            cur=head;
            while(cur.next?.val<list2.val){
                cur=cur.next;
            }
            next=cur.next;
            cur.next=list2;
        }
        else {  
            head=list2;
            cur=head;
            while(cur.next?.val<list1.val){
                cur=cur.next;
            }
                next=cur.next; 
                cur.next=list1; 
            }

        while(next){
            cur=cur.next;
            if(cur.next?.val<=next.val) continue;
            let tempNext=cur.next;
            cur.next=next;
            next=tempNext;
        }
        return head;
    }
}

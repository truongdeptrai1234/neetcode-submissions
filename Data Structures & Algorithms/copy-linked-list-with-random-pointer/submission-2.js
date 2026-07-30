// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(!head) return null;
        let cur = head,index=0,arrayLike=[];
        const cloneHead =new Node(head.val);
        let curClone=cloneHead;
        cur.index=index;
        arrayLike[0]=cloneHead;

        while(cur.next){
            index++;
            cur=cur.next;
            cur.index=index;
            const temp=new Node(cur.val);
            curClone.next=temp;
            curClone=temp;
            arrayLike.push(curClone);
        }
        curClone=cloneHead;cur=head;
        while(cur){
            if(!!cur.random){
                curClone.random=arrayLike[cur.random.index];
            }
            cur=cur.next;
            curClone=curClone.next;
        }
        return cloneHead;
    }
}

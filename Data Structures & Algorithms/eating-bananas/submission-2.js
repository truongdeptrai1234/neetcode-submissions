class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        const maxRate=Math.max(...piles);
        let left=1,right=maxRate;
        let k;
        while(left<=right){
            let mid=left+Math.floor((right-left)/2);

            const totalTime=piles.reduce((acc,val)=>{
                if(val<=mid) return ++acc;
                return Math.ceil(acc+=val/mid);
            },0)

            if(totalTime<=h) {
                right=mid-1;
                k=mid;
            }
            else left=mid+1;
        }
        return k;
    }
}

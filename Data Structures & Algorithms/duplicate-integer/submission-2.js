class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    //prop
    //method
    hasDuplicate(nums) {
        const numsSet=new Set();
        let sizeLoop=0;
        for(let num of nums){
            sizeLoop++;
            numsSet.add(num);
            if(numsSet.size-sizeLoop<0) return true;
        }
        return false;
    }
}

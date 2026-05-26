class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    //prop
    //method
    hasDuplicate(nums) {
        // const numsSet=new Set();
        // let sizeLoop=0;
        // for(let num of nums){
        //     sizeLoop++;
        //     numsSet.add(num);
        //     if(numsSet.size-sizeLoop<0) return true;
        // }
        // return false;

        const numsSet=new Set(nums);
        if(numsSet.size<nums.length) return true;
        return false;
    }
}

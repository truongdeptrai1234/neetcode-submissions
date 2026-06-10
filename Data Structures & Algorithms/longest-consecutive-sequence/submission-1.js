class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet=new Set(nums);
        let maxCons=0;
        for(const num of nums){
            if(!numsSet.has(num-1)){
                let length=1
                let current=num;
                while(numsSet.has(current+1)){
                    current++;
                    length++;
                }
                maxCons=Math.max(maxCons,length);
            }
        }
        return maxCons;
    }
}

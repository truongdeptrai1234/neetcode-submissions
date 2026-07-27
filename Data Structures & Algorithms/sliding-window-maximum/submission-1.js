class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let left=0;
        let maxWindVal=nums[0];
        let result=[];
        if(k===1) return nums;
        for(let right=0;right<nums.length;right++){
            while(right-left+1===k){
                let tempWindArr=nums.slice(left,right+1);
                result.push(Math.max(...tempWindArr));
                left++;
            }
        }
        
        return result; 
    }
}

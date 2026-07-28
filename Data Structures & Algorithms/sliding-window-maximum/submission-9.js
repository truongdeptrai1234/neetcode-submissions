class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let left=0;
        let result=[];
        if(k===1) return nums;
        let maxVal=Math.max(...nums.slice(0,k));
        for(let right=0;right<nums.length;right++){
            
            while(right-left+1===k){
                if(nums[right]>maxVal) {
                    maxVal=nums[right];
                    result.push(maxVal);
                }
                else{
                    let tempWind=nums.slice(left,right+1);
                    const windSet=new Set(tempWind);
                    if(windSet.has(maxVal)) {
                        result.push(maxVal);
                        left++;
                        break;
                    }
                    maxVal=Math.max(...tempWind)
                    result.push(maxVal);
                }
                left++;
            }
        }
        
        return result; 
    }
}

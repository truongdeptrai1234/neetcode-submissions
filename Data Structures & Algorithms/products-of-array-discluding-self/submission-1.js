class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output=[];
        let prefix=[],suffix=[];
        let prefProd=1,sufProd=1;
        for(let [index] of nums.entries()){
            if(index===0) {
                prefix.push(prefProd);
                suffix[nums.length-1]=sufProd;
                continue;
                }

                prefProd*=nums[index-1];
                prefix.push(prefProd);
                sufProd*=nums[nums.length-index];
                suffix[nums.length-index-1]=sufProd;
        }
        for(let i=0;i<=nums.length-1;i++){
            output[i]=prefix[i]*suffix[i];
        }
        return output;
        
    }
}

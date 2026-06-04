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
                continue;
                }
            prefProd*=nums[index-1];
            prefix.push(prefProd);
        }
        for(let i=nums.length-1;i>=0;i--){
            if(i===nums.length-1) {
                suffix[i]=sufProd;
                continue;
                }
            sufProd*=nums[i+1];
            suffix[i]=sufProd;
        }
        for(let i=0;i<=nums.length-1;i++){
            output[i]=prefix[i]*suffix[i];
        }
        return output;
        
    }
}

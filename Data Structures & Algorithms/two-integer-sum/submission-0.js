class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let output=[];
        if(nums.length<2 || nums.length>1000) return output;
        const numsMap=new Map();
        nums.forEach((val,index)=>numsMap.set(val,index));

        for(let [index,num] of nums.entries()){
            if(numsMap.has(target-num)) output.push(index);
            if(output.length>2){
                if(nums[output[0]]+nums[output[1]]===target)
                    {output=[output[0],output[1]];break;}
                if(nums[output[0]]+nums[output[2]]===target)
                    {output=[output[0],output[2]];break;}
                if(nums[output[1]]+nums[output[2]]===target)
                    {output=[output[1],output[2]];break;}
            }
        }
        return output;
    }
}

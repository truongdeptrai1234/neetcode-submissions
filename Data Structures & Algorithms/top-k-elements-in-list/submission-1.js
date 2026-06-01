class Solution {
    /**
     * @param {number[]} nums
     * @param {number}  
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let output=[];
        const mapNums={};
        const numsSet=new Set(nums);
        numsSet.forEach(val=>mapNums[val]=0);
        nums.forEach(val=>mapNums[val]++);
        for(let ele of Object.entries(mapNums).sort((a,b)=>b[1]-a[1])){
            if(output.length === k) break;
            output.push(+ele[0]);
        }
        return output;
    }
}

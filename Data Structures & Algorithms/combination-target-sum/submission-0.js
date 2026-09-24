class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result=[];
        const stack=[];
        function sumChecking(start,sum){

            if(sum > target) return;
            if(sum===target) {
                return result.push([...stack])
            }

            for(let i=start;i<nums.length;i++){
                stack.push(nums[i]);
                sumChecking(i,sum+nums[i]);
                stack.pop();
            }
        }
        sumChecking(0,0);
        return result;
    }
}

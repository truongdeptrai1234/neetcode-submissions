class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left=0,right=nums.length-1;
        while(left<right){
            let mid=left+Math.floor((right-left)/2);
            if(nums[mid]===target) return mid;
            if(nums[left]===target) return left;
            if(nums[mid]>nums[right]){
                 if(target>nums[mid] || target<nums[left]) left=mid+1;
                 else right=mid;
            }
            else{
                if(target<nums[mid]) right=mid;
                else left=mid+1;
            }
        }
        if(nums[left]!==target) return -1;
        return left;
    }
}

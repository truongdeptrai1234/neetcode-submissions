class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left=0,right=nums.length-1;
        let min=nums[0];
        if(nums[left]<nums[right]) return nums[0];
        while(left<=right){
            let mid=left+Math.ceil((right-left)/2);
            min=Math.min(min,nums[mid]);
            
            if(nums[mid]>=nums[left] && nums[mid]>=nums[right] && mid!==right) {
                    left=mid+1;
                    min=Math.min(min,nums[left]);
                }
            else if((nums[mid]<=nums[left] && nums[mid]<=nums[right] && mid!==left)
                    || nums[mid]>nums[left] && nums[mid]<nums[right]) {
                    right=mid-1;
                    min=Math.min(min,nums[right]);
                }
            if(mid===left || mid===right) break;

        }
        return min;
    }
}

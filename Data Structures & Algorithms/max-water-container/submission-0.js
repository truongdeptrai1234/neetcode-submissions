class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxContainer=0;
        let left=0,right=heights.length-1;
        while(left<right){
            let currentCon=Math.min(heights[left],heights[right])*(right-left);
            maxContainer=Math.max(maxContainer,currentCon);
            if(heights[left]<heights[right]){
                left++;
            }
            else if(heights[left]===heights[right]) {
                currentCon=Math.min(heights[left],heights[right])*(right-left);
                maxContainer=Math.max(maxContainer,currentCon);
                left++;
                right--;
            }
            else right--;
        }
        return maxContainer;
    }
}

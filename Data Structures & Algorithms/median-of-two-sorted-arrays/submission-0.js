class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        //ensure nums1 length alway smaller 
        if(nums1.length > nums2.length) [nums1,nums2]=[nums2,nums1];
        const m = nums1.length;
        const n = nums2.length;

        let left = 0;
        let right = m;

        while (left <= right) {
        const partition1 = Math.floor((left + right) / 2);
        const partition2 = Math.floor((m + n + 1) / 2) - partition1;

        const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
        const minRight1 = partition1 === m ? Infinity : nums1[partition1];

        const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
        const minRight2 = partition2 === n ? Infinity : nums2[partition2];

        // Correct partition
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if ((m + n) % 2 === 1) {
                return Math.max(maxLeft1, maxLeft2);
            }

        return(Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
        }
            // nums1's partition is too far right
            if (maxLeft1 > minRight2) {
                right = partition1 - 1;
            } else {
            // nums1's partition is too far left
                left = partition1 + 1;
            }
            
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const seen = new Map();

        for (const num of nums) {
            if(seen.has(num)) return num;
            seen.set(num, num);
       }
    }
}

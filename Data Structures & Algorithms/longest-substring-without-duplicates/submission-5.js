class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left=0,maxSize=0;
        let longestSub=new Set(s[0]);
        if(s.length===1) return 1;
        for(let right=1;right<s.length;right++){
            if(longestSub.has(s[right])){
                while(left<right){
                    if(s[left]===s[right]) {
                        left++;
                        break;
                    }
                    longestSub.delete(s[left]);
                    left++;
                }
            }else longestSub.add(s[right])
            maxSize=Math.max(maxSize,longestSub.size);
        }
        
        return maxSize;
    }
}

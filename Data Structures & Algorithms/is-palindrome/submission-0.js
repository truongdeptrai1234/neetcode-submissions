class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let plStr=s.toLowerCase().replaceAll(/[^a-zA-Z0-9]/g,"");
        
        for(let index=0;index<plStr.length;index++){
            if(plStr[index]!==plStr[plStr.length-index-1]) return false;

        }
        return true;
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let compareS=[];
        if(s.length===1) return false;
        for(let i=0;i<s.length;i++){
           if(s[i]==='(' || s[i]==='[' || s[i]==='{') compareS.push(s[i]);
           else {
            const char=compareS.pop();
            if(Math.abs(char?.codePointAt(0)-s[i].codePointAt(0))>2 || !char) return false;
            }

        }
        if(compareS.length > 0) return false;
        return true
    }
}

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const freqArrS1=new Array(26).fill(0);
        const freqWind=new Array(26).fill(0);
        let left=0;
        s1.split('').forEach(s=>freqArrS1[s.codePointAt(0)-97]++);
        for(let right=0;right<s2.length;right++){
            freqWind[s2[right].codePointAt()-97]++;
            if((right-left)+1>s1.length){
                freqWind[s2[left].codePointAt()-97]--;
                left++;
            }
            if(freqArrS1.every((c,i)=>c===freqWind[i])) return true
        }
        
        return false;
    }
}

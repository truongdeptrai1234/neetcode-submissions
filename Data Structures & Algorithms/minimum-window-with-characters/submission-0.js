class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        
    let left=0;
    const freqWind=new Array(58).fill(0);
    const freqInput=new Array(58).fill(0);
    let minWindIndex={index:left,length:s.length};
    t.split('').forEach(c=>freqInput[c.codePointAt(0)-65]++)
    for(let right=0;right<s.length;right++){
        freqWind[s[right].codePointAt(0)-65]++;
        while(!freqWind.some((fr,i)=>fr<freqInput[i])){
            if(minWindIndex.length>(right-left)+1){
                minWindIndex.length=(right-left)+1;
                minWindIndex.index=left;
            }
            freqWind[s[left].codePointAt(0)-65]--;
            left++;
        }
    }

    
    if(left===0) return '';
    return s.substring(minWindIndex.index,minWindIndex.index+minWindIndex.length)
    }
}

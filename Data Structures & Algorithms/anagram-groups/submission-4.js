class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let output=[];
        let groupAnag=[];
        let temp;
        if(strs.length===1) return [strs];
        let strCodeMap=strs.map(val=>val.split('').reduce((acc,val)=>{
            return acc*val.charCodeAt(0);
        },1));
        strCodeMap=Array.from(strCodeMap.entries()).sort((a,b)=>a[1]-b[1]);
        console.log(strCodeMap)
        temp=strCodeMap[0][1];
        strCodeMap.forEach((val,i,arr)=>{
            if(temp!==val[1]) {
                temp=val[1];
                output.push(groupAnag);
                groupAnag=[];
            }

            groupAnag.push(strs[val[0]]);
            if(i===arr.length-1) output.push(groupAnag);
        })
        return output;
    }
}

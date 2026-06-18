class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxSuf=[],maxPre=[];
        let maxSufValue=0,maxPreValue=0,maxContainer=0;
        for(let i=0;i<height.length;i++){
            //implement suffix array
            
            if(i===0) {maxSuf.push(0);continue;};
            if(height[i-1]>height[i]) {
                maxSufValue=Math.max(height[i-1],maxSufValue);
                maxSuf.push(maxSufValue);
            }
            else maxSuf.push(maxSufValue);
    
        };
        for(let i=height.length-1;i>=0;i--){
            //implement prefix array
            
            if(i===height.length-1) {maxPre.unshift(0);continue;};
            if(height[i]<height[i+1]) {
                maxPreValue=Math.max(height[i+1],maxPreValue);
                maxPre.unshift(maxPreValue);
            }
            else maxPre.unshift(maxPreValue);
    
        };
        console.log(maxSuf,maxPre);
        for(let i=0;i<height.length;i++){
            let trapWater=Math.min(maxSuf[i],maxPre[i])-height[i];
            if(trapWater<=0) trapWater=0
            maxContainer+=trapWater;
        }
        return maxContainer;
    }

}
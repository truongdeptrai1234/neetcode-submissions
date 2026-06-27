class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let output=[],highTemp=[temperatures.length-1];
        for(let i=temperatures.length-1;i>=1;i--){
            if(i===temperatures.length-1) output[i]=0;
            if(temperatures[i-1]<temperatures[i]) {
                output[i-1]=1;
                continue;
            }
            if(temperatures[i-1]>=temperatures[i] && temperatures[i-1]>=temperatures[highTemp.at(-1)]){
                output[i-1]=0;
                highTemp.push(i-1);
            }
            else   {
                let count=i+1;
                while(temperatures[i-1]>=temperatures[count]){
                    count++;
                }
                output[i-1]=count-(i-1);
            }
                    
        }  

        return output;
    }
}

class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // let output=[0],highTemp=[temperatures.length-1];
        // for(let i=temperatures.length-1;i>=1;i--){

        //     if(temperatures[i-1]<temperatures[i]) {
        //         output.unshift(1);
        //         continue;
        //     }
        //     if(temperatures[i-1]>=temperatures[i] && temperatures[i-1]>=temperatures[highTemp.at(-1)]){
        //         output.unshift(0);
        //         highTemp.push(i-1);
        //     }
        //     else   {
        //         let count=i+1;
        //         while(temperatures[i-1]>=temperatures[count]){
        //             count++;
        //         }
        //         output.unshift(count-(i-1));
        //     }
                    
        // }  

        // return output;

    const result = new Array(temperatures.length).fill(0);
    const stack = []; // stores indices

    for (let i = 0; i < temperatures.length; i++) {
        while (
                stack.length > 0 &&
                temperatures[i] > temperatures[stack[stack.length - 1]]
            ) {
        const prevIndex = stack.pop();

        result[prevIndex] = i - prevIndex;
    }

    stack.push(i);
  }

  return result;
    }
}

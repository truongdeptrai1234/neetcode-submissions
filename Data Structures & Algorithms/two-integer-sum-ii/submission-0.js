class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let output=[];
        let reverseIndex=numbers.length-1,index=0;

        while(index<reverseIndex){
            
            if(numbers[index]+numbers[reverseIndex]>target) reverseIndex--;
            else if(numbers[index]+numbers[reverseIndex]<target) index++;
            else {
                output=[index+1,reverseIndex+1];break;
                }
        }
        return output;
    }
}

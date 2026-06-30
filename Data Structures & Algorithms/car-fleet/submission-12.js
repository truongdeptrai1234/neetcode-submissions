class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let fleet=1,maxTime=0;

        if(position.length===1) return 1;
        let carTravel=position.map((pos,i)=>{
            const time=(target-pos)/speed[i];
            return [pos,time];
       }).sort((a,b)=>a[0]-b[0]);
       console.log(carTravel);
       while(carTravel.length>1){
            maxTime=Math.max(maxTime,carTravel.pop()[1]);
            if(maxTime<carTravel.at(-1)[1]) fleet++;
       }
       return fleet;
    }
}

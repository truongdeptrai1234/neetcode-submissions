class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        let valArr=[`${value}-${timestamp}`];
        if(this.keyStore.get(key)) 
        this.keyStore.get(key).push(`${value}-${timestamp}`);
        else this.keyStore.set(key,valArr);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const keyVal=this.keyStore.get(key);

        if(!keyVal || timestamp<Number(keyVal[0].split('-')[1]) ) return '';
        if(timestamp>=Number(keyVal.at(-1).split('-')[1])) 
            return keyVal.at(-1).split('-')[0];

        let left=0,right=keyVal.length-1;
        while(left<=right){
            let mid=left+Math.ceil((right-left)/2);
            if(left===right) return  keyVal[left].split('-')[0];
            if(Number(keyVal[mid].split('-')[1])===timestamp) 
                return keyVal[mid].split('-')[0];
            if(Number(keyVal[mid].split('-')[1])>timestamp) right=mid-1;
            else left=mid;
        }
    }
}

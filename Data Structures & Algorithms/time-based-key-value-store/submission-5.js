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
        let valArr=[{val:value,timestp:timestamp}];
        if(this.keyStore.get(key)) 
        this.keyStore.get(key).push({val:value,timestp:timestamp});
        else this.keyStore.set(key,valArr);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const keyVal=this.keyStore.get(key);
        if(!keyVal) return '';
        let left=0,right=keyVal.length-1;
        while(left<=right){
            let mid=left+Math.floor((right-left)/2);
            if(keyVal[mid].timestp<=timestamp) left=mid+1;
            else right=mid-1;
        }
        return right>=0 ? keyVal[right].val :'';
    }
}

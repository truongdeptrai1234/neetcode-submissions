class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length===0) return '-1';
        const encodeStrs=strs.map(val=>{
            if(!val) return val;
            val=val.split("").map(c=>c.codePointAt(0).toString(36))
            return val.join('_');
        })
        return encodeStrs.join("#");
    }
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str==='-1') return [];
        str=str.split("#").map(val=>{
            if(!val) return val;
            val=val.split("_").map(cb=>String.fromCodePoint(parseInt(cb,36)))
            return val.join("");
        })
        
        return str;
    }
}

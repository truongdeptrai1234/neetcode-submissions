class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
    const blockList=[];
    for(let row of board){
            let rowNumsOnly=row.filter(val=>val!=='.');
            const rowSet=new Set(rowNumsOnly);
            if(rowNumsOnly.length!==rowSet.size) return false;
        }
    for(let i=0;i<board.length;i++){
        let tempCol=[];
        for(let row of board) tempCol.push(row[i]);
        const colNumsOnly=tempCol.filter(val=>val!=='.');
        const colSet=new Set(colNumsOnly);
        if(colNumsOnly.length!==colSet.size) return false;
    }
    for(let blockCol=0;blockCol<board.length;blockCol+=3){
        let blockArr=[];
        
        for(let [index,row] of board.entries()){

                let rowBlock=row.slice(blockCol,blockCol+3);

                blockArr.push(...rowBlock);

                if(blockArr.length===9) {
                    blockList.push(blockArr);        
                    blockArr=[];
                }
            };
        }
    for(let arr of blockList){
        let arrNumsOnly=arr.filter(val=>val!=='.');
        const numsSet=new Set(arrNumsOnly);
        if(arrNumsOnly.length!==numsSet.size) return false;
    }
        return true;
    }
}

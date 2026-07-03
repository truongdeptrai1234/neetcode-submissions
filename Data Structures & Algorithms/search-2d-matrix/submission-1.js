class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let leftRange=0,rightRange=matrix.length-1;
        let targetRow=null;
        while(leftRange<=rightRange){
            let mid=leftRange+Math.floor((rightRange-leftRange)/2);
            if(matrix[mid][0]<=target && matrix[mid][matrix[mid].length-1]>=target){
                targetRow=mid;
                leftRange=0;rightRange=matrix[mid].length-1;
                break;
            }
            if(matrix[mid][0]<target) leftRange=mid+1;
            else if(matrix[mid][0]>target) rightRange=mid-1;
        }
        if(targetRow===null) return false;
        while(leftRange<=rightRange){
            let mid=leftRange+Math.floor((rightRange-leftRange)/2);
            if(matrix[targetRow][mid]===target) return true;
            if(matrix[targetRow][mid]<target) leftRange=mid+1;
            else if(matrix[targetRow][mid]>target) rightRange=mid-1;
        }
        return false;
    }
}

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack=[];
        const operand={
            '+':(a,b)=>a+b,
            '-':(a,b)=>b-a,
            '*':(a,b)=>a*b,
            '/':(a,b)=>Math.trunc(b/a)
        }
        for(let token of tokens){
            if(Number.isFinite(+token)) {
                    stack.push(+token);
               }
            else{
                   stack.push(operand[token](stack.pop(),stack.pop())) 
                }
            }

        return stack.pop();
    }
}

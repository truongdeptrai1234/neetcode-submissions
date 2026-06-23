class MinStack {
    constructor() {
        this.inputs=[]
        this.minStack=[]
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.inputs.push(val);
        if(this.minStack.length===0) this.minStack.push(val);
        else this.minStack.push(Math.min(val,this.minStack.at(-1)));
    }

    /**
     * @return {void}
     */
    pop() {
        this.inputs.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.inputs.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack.at(-1);
    }
}

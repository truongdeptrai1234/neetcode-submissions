class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const result = [];
        const stack = [];

        candidates.sort((a, b) => a - b);

        function backtrackSum2(start, sum) {

            if (sum === target) {
                result.push([...stack]);
                return;
            }
            if (sum > target) return;

            for (let i = start; i < candidates.length; i++) {
                if (i > start && candidates[i] === candidates[i - 1]) {
                    continue;
                }
                stack.push(candidates[i]);
                backtrackSum2(i + 1, sum + candidates[i]);
                stack.pop();
            }
        }
        backtrackSum2(0, 0);
        return result;
    }
}

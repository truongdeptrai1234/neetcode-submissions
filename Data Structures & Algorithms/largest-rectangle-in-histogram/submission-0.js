class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;

    heights.push(0); // sentinel
    for (let i = 0; i < heights.length; i++) {

        while (
            stack.length &&
            heights[i] < heights[stack.at(-1)]
        ) {
            const h = heights[stack.pop()];

            const left = stack.length ? stack.at(-1) : -1;

            const width = i - left - 1;

            maxArea = Math.max(maxArea, h * width);
        }
        stack.push(i);
    }

    return maxArea;
    }
}

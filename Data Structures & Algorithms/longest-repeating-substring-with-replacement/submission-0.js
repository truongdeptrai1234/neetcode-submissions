class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
    const count = new Array(26).fill(0);

    let left = 0;
    let maxFreq = 0;
    let longest = 0;

    for (let right = 0; right < s.length; right++) {
        const index = s.charCodeAt(right) - 65;
        count[index]++;

        // Highest frequency we've ever seen in the window
        maxFreq = Math.max(maxFreq, count[index]);

        // Too many replacements needed
        while ((right - left + 1) - maxFreq > k) {
            count[s.charCodeAt(left) - 65]--;
            left++;
        }

        longest = Math.max(longest, right - left + 1);
    }

    return longest;
    }
}

class TrieNode {
    constructor() {
        this.children = new Map(); this.word = null;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        // 1. Build Trie from words 
        const root = new TrieNode();

        for (const word of words) { 

        let node = root; 

        for (const char of word) { 
            if (!node.children.has(char)) { 
                    node.children.set(char, new TrieNode()); 
                } 
                    node = node.children.get(char); 
            } 
                    node.word = word; 
        }
        const result = []; 
        const rows = board.length; 
        const cols = board[0].length;

        // 2. DFS from every board cell
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) dfs(r, c, root);
        }

        return result;

        function dfs(r, c, node) { 
            // Out of bounds 
            if ( r < 0 || r >= rows || c < 0 || c >= cols ) { return; } 
                const char = board[r][c]; 
            // Already visited 
            if (char === "#") return; 
            // No matching Trie path 
            if (!node.children.has(char)) return; 
            const next = node.children.get(char); 
            // Found a complete word 
            if (next.word !== null) { 
                result.push(next.word); 
                next.word = null; 
                // avoid duplicate result 
            } 
            // Mark current cell as visited 
            board[r][c] = "#"; 
            // Explore 4 directions 
            dfs(r + 1, c, next); 
            dfs(r - 1, c, next); 
            dfs(r, c + 1, next); 
            dfs(r, c - 1, next); 
            // Backtrack 
            board[r][c] = char; 
        }
    }
}

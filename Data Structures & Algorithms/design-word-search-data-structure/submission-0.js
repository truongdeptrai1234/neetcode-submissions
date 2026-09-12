class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {

        let current = this.root;

        for (const char of word) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }

            current = current.children.get(char);
        }

        current.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const dfs = (node, i) => {
            // Entire word consumed
            if (i === word.length) {
                return node.isEnd;
            }

            const char = word[i];

            // Normal character
            if (char !== ".") {
                const child = node.children.get(char);

                if (!child) {
                    return false;
                }

                return dfs(child, i + 1);
            }

            // '.': try every possible child
            for (const child of node.children.values()) {
                if (dfs(child, i + 1)) {
                    return true;
                }
            }
            return false;
        };

        return dfs(this.root, 0);
    }
}

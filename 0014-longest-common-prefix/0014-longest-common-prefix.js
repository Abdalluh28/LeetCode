/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let TrieNode = function () {
        this.children = {};
        this.endOfWord = false;
    }
    this.root = new TrieNode();
    let insert = (word) => {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.endOfWord = true;
    }
    let search = (prefix, node) => {
        while (Object.entries(node.children).length === 1 && !node.endOfWord) {
            let char = Object.keys(node.children)[0];
            prefix += char
            node = node.children[char]
        }
        return prefix;
    }
    for (let word of strs) {
        insert(word)
    }
    return search("", this.root);
};
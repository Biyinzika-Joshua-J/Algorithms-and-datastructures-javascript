// implementing a Trie Node
class TrieNode{
    constructor(character){
        this.character = character;
        this.children = new Array(26).fill(null); // storing english words, hence 26, the size of the alphabet
        this.isEndOfWord = false;
    }
}

TrieNode.prototype.markAsLeaf = function(){
    this.isEndOfWord = true;
}

TrieNode.prototype.unMarkAsLeaf = function(){
    this.isEndOfWord = false;
}

// implementing the trie class
class Trie {
    constructor(){
        this.root = new TrieNode('');
    }
}

Trie.prototype.getIndex = function(t){
    return t.charCodeAt(0) - 'a'.charCodeAt(0);
}

Trie.prototype.insert = function(word){
    if (!word) return;
    let currentNode = this.root;
    word = word.toLowerCase();
    for (let character=0; character<word.length; character++){
        let index = this.getIndex(word[character]);
        if (!currentNode.children[index]){
            currentNode.children[index] = new TrieNode(word[character]);
        }
        currentNode = currentNode.children[index];
    }
    currentNode.isEndOfWord = true;
}

Trie.prototype.search = function(word){
    if (!word) return false;
    word = word.toLowerCase();
    let currentNode = this.root;

    for (let character=0; character<word.length; character++){
        let index = this.getIndex(word[character]);
        if (!currentNode.children[index]) return false;
        currentNode = currentNode.children[index];
    }
    if (currentNode && currentNode.isEndOfWord) return true;
    return false;
}

Trie.prototype.deleteHelper = function(word, root, wordLength, level){
    
}

Trie.prototype.delete = function(word){
    if (!word || !this.root) return;
    this.deleteHelper(word, this.root, word.length, 0);
}

let trie = new Trie();
let words = ['car', 'cat', 'rain', 'dog', 'donut', 'jesus', 'joshua', 'john']

for (let i=0; i<words.length; i++){
    trie.insert(words[i]);
}


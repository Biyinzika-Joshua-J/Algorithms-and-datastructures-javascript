// implementing a Trie Node
class TrieNode {
  constructor(character) {
    this.character = character;
    this.children = new Array(26).fill(null); // storing english words, hence 26, the size of the alphabet
    this.isEndOfWord = false;
  }
}

TrieNode.prototype.markAsLeaf = function () {
  this.isEndOfWord = true;
};

TrieNode.prototype.unMarkAsLeaf = function () {
  this.isEndOfWord = false;
};

// implementing the trie class
class Trie {
  constructor() {
    this.root = new TrieNode("");
  }
}

Trie.prototype.getIndex = function (t) {
  return t.charCodeAt(0) - "a".charCodeAt(0);
};

Trie.prototype.insert = function (word) {
  if (!word) return;
  let currentNode = this.root;
  word = word.toLowerCase();
  for (let character = 0; character < word.length; character++) {
    let index = this.getIndex(word[character]);
    if (!currentNode.children[index]) {
      currentNode.children[index] = new TrieNode(word[character]);
    }
    currentNode = currentNode.children[index];
  }
  currentNode.isEndOfWord = true;
};

Trie.prototype.search = function (word) {
  if (!word) return false;
  word = word.toLowerCase();
  let currentNode = this.root;

  for (let character = 0; character < word.length; character++) {
    let index = this.getIndex(word[character]);
    if (!currentNode.children[index]) return false;
    currentNode = currentNode.children[index];
  }
  if (currentNode && currentNode.isEndOfWord) return true;
  return false;
};

Trie.prototype.hasNoChildren = function (currentNode) {
    if (!currentNode.children) return true;
  for (let i = 0; i < currentNode.children.length; i++) {
    if (currentNode.children[i] != null) return false;
  }
  return true;
};

Trie.prototype.deleteHelper = function (word, currentNode, wordLength, level) {
  let deletedSelf = false;
  if (currentNode == null) {
    console.log("Key does not exist");
    return deletedSelf;
  }

  //Base Case: If we have reached at the node which points to the alphabet at the end of the key.
  if (level == wordLength) {
    //If there are no nodes ahead of this node in this path
    //Then we can delete this node
    if (this.hasNoChildren(currentNode.children)) {
      currentNode = null;
      deletedSelf = true;
    }


    //If there are nodes ahead of currentNode in this path
    //Then we cannot delete currentNode. We simply unmark this as leaf
    else {
      currentNode.unMarkAsLeaf();
      deletedSelf = false;
    }
  } else {
    let childNode = currentNode.children[this.getIndex(word[level])];
    let childDeleted = this.deleteHelper(word, childNode, wordLength, level + 1);
    if (childDeleted) {
      //Making children pointer also None: since child is deleted
      currentNode.children[this.getIndex(word[level])] = null;
      //If currentNode is leaf node that means currentNode is part of another word
      //and hence we can not delete this node and it's parent path nodes
      if (currentNode.isEndWord) deletedSelf = false;
      //If childNode is deleted but if currentNode has more children then currentNode must be part of another word
      //So, we cannot delete currenNode
      else if (this.hasNoChildren(currentNode) == false) deletedSelf = false;
      //Else we can delete currentNode
      else {
        currentNode = null;
        deletedSelf = true;
      }
    } else deletedSelf = false;
  }
  return deletedSelf;
};

Trie.prototype.delete = function (word) {
  if (!word || !this.root) return;
  this.deleteHelper(word, this.root, word.length , 0);
};

let trie = new Trie();
let words = ["car", "cat", "rain", "dog", "donut", "jesus", "joshua", "john"];

for (let i = 0; i < words.length; i++) {
  trie.insert(words[i]);
}

console.log(trie.search("joshua"));
console.log(trie.delete("joshu"));
console.log(trie.search("joshua"));

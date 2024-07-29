// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left and right


class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}

const root = new TreeNode(10);
console.log(root);


// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        if (this.root === null) {
            this.root = new TreeNode(value);
        } else {
            this.insertNode(this.root, value)
        }
    }
    insertNode(node, value) {

        if (node.value > value) {
            if (node.left === null) {
                node.left = new TreeNode(value);
            } else {
                this.insertNode(node.left, value);
            }

        } else {
            if (node.right === null) {
                node.right = new TreeNode(value);
            } else {
                this.insertNode(node.right, value);
            }
        }

    }
    inOrderTraversal(node = this.root, result = []) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}


const binaryTree = new BinaryTree();

binaryTree.insert(100);
binaryTree.insert(11);
binaryTree.insert(120);
binaryTree.insert(10);
binaryTree.insert(14);
binaryTree.insert(114);

console.log(binaryTree);


console.log(binaryTree.inOrderTraversal());


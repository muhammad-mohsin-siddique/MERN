// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. log the nodes as they are visited.


class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

function arrayToTree(array, index = 0){
    if(index >= array.length){
        return null;
    }

    const node = new TreeNode(array[index]);
    node.left = arrayToTree(array, 2 * index + 1);
    node.right = arrayToTree(array, 2 * index + 2);

    return node;
}

function inOrderTraversal(node) {
    if (node === null) {
      return;
    }

    inOrderTraversal(node.left);
  

    console.log(node.value);
  
    inOrderTraversal(node.right);

  }

const binaryTree = [1, 2, 3, 4, 5];

const root = arrayToTree(binaryTree);

inOrderTraversal(root);

// Task 10: Write a recursive function to calculate the depth of a binary tree. log the result for few cases .

function calculateDepthOfTheTree(node){
    if (node === null) {
        return 0;
    }

    const leftDepth = calculateDepthOfTheTree(node.left);
    const rightDepth = calculateDepthOfTheTree(node.right);

    return Math.max(leftDepth, rightDepth) + 1;
}


console.log('Depth: ', calculateDepthOfTheTree(root));
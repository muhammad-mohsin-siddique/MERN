// Task 1: Implement Node class to represent an element in a linked list with properties value and next 

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const node = new Node(1);
console.log(node);
node.next = new Node(2);
console.log(node.next);


// Task 2: Implement a LinkList class with methods to add a node to the end, remove a node from the end and display all nodes

class LinkList{
    constructor(){
        this.head = null;
    }
    addNode(value){
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
    }
    display(){

        let temp = this.head;
        let i = 0;
        while (temp) {
            console.log(`LinkedList Node ${i + 1} value = : ${temp.value}`);
            i++;
            temp = temp.next;
        }
    }
    removeNode(){
        
        if (this.head === null) {
            console.log("List is empty. Cannot remove node.");
            return;
        }


        if (this.head.next === null) {
            this.head = null;
            return;
        }


        let temp = this.head;

        while (temp.next.next) {
            temp = temp.next;
        }
        temp.next = null;


    }
}

const linkedList = new LinkList();

console.log(linkedList);

linkedList.addNode(200);
linkedList.addNode(300);
linkedList.addNode(400);
linkedList.addNode(500);
linkedList.addNode(600);


console.log(linkedList);

console.log('All Elements');
linkedList.display();

linkedList.removeNode();
console.log('1 Element removed');
linkedList.display();

linkedList.removeNode();
console.log('2 Elements removed');
linkedList.display();

linkedList.removeNode();
console.log('3 Elements removed');
linkedList.display();
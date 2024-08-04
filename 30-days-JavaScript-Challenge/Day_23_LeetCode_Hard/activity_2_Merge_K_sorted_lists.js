function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// Run Time is = 340ms but beat 80% in memory


// var mergeKLists = function(lists) {
//     if (lists.length === 0) {
//         return null;
//     } else if (lists.length === 1) {
//         return lists[0];
//     }

//     let firstlist = lists[0];
//     for (let index = 1; index < lists.length; index++) {
//         firstlist = mergeTwoLists(firstlist, lists[index]);
//     }
//     return firstlist;
// };

// var mergeTwoLists = function (list1, list2) {
//     let head = new ListNode(); // Dummy node to start the merged list
//     let currentPointer = head;

//     while (list1 !== null && list2 !== null) {
//         if (list1.val <= list2.val) {
//             currentPointer.next = list1;
//             list1 = list1.next;
//         } else {
//             currentPointer.next = list2;
//             list2 = list2.next;
//         }
//         currentPointer = currentPointer.next;
//     }

//     // Attach the remaining elements
//     if (list1 !== null) {
//         currentPointer.next = list1;
//     }
//     if (list2 !== null) {
//         currentPointer.next = list2;
//     }

//     return head.next; // Return the merged list starting from the first node
// };


// 100ms but the memory only 5% beat

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(node) {
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return top;
    }
    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].val >= this.heap[parentIndex].val) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }
    bubbleDown(index) {
        const length = this.heap.length;
        while (true) {
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;
            let smallestIndex = index;

            if (leftIndex < length && this.heap[leftIndex].val < this.heap[smallestIndex].val) {
                smallestIndex = leftIndex;
            }
            if (rightIndex < length && this.heap[rightIndex].val < this.heap[smallestIndex].val) {
                smallestIndex = rightIndex;
            }
            if (smallestIndex === index) break;

            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            index = smallestIndex;
        }
    }
    isEmpty() {
        return this.heap.length === 0;
    }

}

var mergeKLists = function(lists) {
    if (lists.length === 0) return null;

    const minHeap = new MinHeap();

    // Push the head of each list into the heap
    for (let list of lists) {
        if (list !== null) {
            minHeap.push(list);
        }
    }

    let head = new ListNode(0);
    let current = head;

    // Extract the minimum node and push its next node into the heap
    while (!minHeap.isEmpty()) {
        const smallestNode = minHeap.pop();
        current.next = smallestNode;
        current = current.next;
        if (smallestNode.next !== null) {
            minHeap.push(smallestNode.next);
        }
    }

    return head.next;
};



function createList(arr) {
    let head = new ListNode();
    let current = head;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return head.next;
}

// Example test case
let list1 = createList([1, 4, 5]);
let list2 = createList([1, 3, 4]);

let arrayOfLists = [list1, list2];

console.log(mergeKLists(arrayOfLists)); // Output should be a merged linked list

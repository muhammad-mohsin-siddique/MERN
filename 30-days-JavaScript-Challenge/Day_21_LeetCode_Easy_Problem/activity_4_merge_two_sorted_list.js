/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


var mergeTwoLists = function (list1, list2) {

    // console.log(list1);
    // console.log(list2);


    let head = new ListNode();
    let currentPointer = head;

    while (list1 !== null && list2 !== null) {

        if (list1.val <= list2.val) {
            currentPointer.next = list1;
            list1 = list1.next;
        }
        else {
            currentPointer.next = list2;
            list2 = list2.next;
        }
        currentPointer = currentPointer.next;


    }

    //Remaining Element in the list1

    if (list1) {
        currentPointer.next = list1;
    }

    //Remaining Element in the list2    
    if (list2) {
        currentPointer.next = list2;
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

let list1 = createList([1, 2, 4]);
let list2 = createList([1, 3, 4]);

let mergedList = mergeTwoLists(list1, list2);

let result = [];
while (mergedList !== null) {
    result.push(mergedList.val);
    mergedList = mergedList.next;
}


console.log(result); 
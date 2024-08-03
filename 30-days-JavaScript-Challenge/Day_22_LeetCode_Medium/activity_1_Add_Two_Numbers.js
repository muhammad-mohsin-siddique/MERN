// Task 1: Solve the Add Two Numbers Problem on LeetCode. 
// Write a functions that takes two non-empty linked list representing two non-negative integers. The digits are stored in reverse order, and each node contians a single digit. Add two numbers and return the sum as link list.
// Create a few test cases with linked list and log the sum as a linked list 

var addTwoNumbers = function(l1, l2) {
    let head = new ListNode();
    let current = head;
    let carry = 0;

    while(l1 !== null || l2 !== null){

        let l1_number = 0;
        let l2_number = 0;

        if(l1 !== null){
            l1_number = l1.val;
        }
        if(l2 !== null){
            l2_number = l2.val;
        }
        
        let sum = carry + l1_number + l2_number;

        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);

        current = current.next;

        if(l1 !== null) l1 = l1.next;
        if(l2 !== null) l2 = l2.next;


    }
    if(carry > 0){
        current.next = new ListNode(carry);
    }
    return head.next;
};
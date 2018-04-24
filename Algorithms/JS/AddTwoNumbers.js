/**
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    "use strict"
    let listHead = new ListNode(-1);
    let currentNode = listHead;
    let carry = 0;
    
    while(l1 || l2 || carry) { 
        let sum = 0;
        
        //construct sum value
        if(carry) {
            sum += 1;
        }
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        //construct carry value
        if(sum >= 10) {
            sum = sum % 10;
            carry = 1;
        }
        else {
            carry = 0;
        }
        
		//iterate to next node
        currentNode.val = sum;
        if(l1 || l2 || carry) {
            currentNode.next = new ListNode(0);
            currentNode = currentNode.next;  
        } 
        else {
            return listHead;
        }
    }
};
    
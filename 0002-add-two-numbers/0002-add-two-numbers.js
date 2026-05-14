/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 9, 9, 9, 9, 9, 9, 9
    // 9, 9, 9, 9
    // 8, 9, 9, 9, 0, 0, 0, 1

    let dummy = new ListNode(-1);
    let current = dummy;
    let sum = 0, result = 0, acc = 0;

    while(l1 || l2 || acc) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;


        sum = val1 + val2 + acc
        acc = Math.floor(sum / 10)
        result = sum % 10  
        current.next = new ListNode(result);
        current = current.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next
    }

    return dummy.next

};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 1 2 3 4 5 6 7 8 9 10
    // length - n = index

    let arr = [];
    let dummy = new ListNode(-1);
    let current = dummy

    while(head) {
        arr.push(head.val)
        head = head.next
    }
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        if (i === length-n) continue;

        current.next = new ListNode(arr[i]);
        current = current.next
    }

    return dummy.next

};
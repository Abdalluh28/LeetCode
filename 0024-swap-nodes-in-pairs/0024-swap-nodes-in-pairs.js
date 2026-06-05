/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head || !head.next) return head
    let curr = head, prev = head.next;
    curr.next = curr.next.next;
    prev.next = curr;
    head = prev
    while (curr.next && curr.next.next) {
        prev = curr; curr = curr.next;
        prev.next = curr.next;
        curr.next = curr.next.next;
        prev.next.next = curr;

    }

    return head
};
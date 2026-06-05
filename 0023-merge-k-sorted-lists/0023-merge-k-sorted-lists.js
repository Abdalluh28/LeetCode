/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let arr = []
    for (let i = 0; i < lists.length; i++) {
        let head = lists[i]
        while (head) {
            arr.push(head.val)
            head = head.next
        }
    }
    arr = arr.sort((a, b) => a - b)
    let dummy = new ListNode(-1), curr = dummy;
    for (let i = 0; i < arr.length; i++) {
        curr.next = new ListNode(arr[i])
        curr = curr.next
    }
    return dummy.next
};
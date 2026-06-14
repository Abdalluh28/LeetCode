/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    let arr = [];
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    let n = arr.length, sum = 0;
    for (let i = 0; i < n / 2; i++) {
        sum = Math.max(sum, arr[i] + arr[n - i - 1])
    }
    return sum
};
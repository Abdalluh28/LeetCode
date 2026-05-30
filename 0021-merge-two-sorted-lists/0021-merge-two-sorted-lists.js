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
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let linkedList = dummy;
    
    while(list1 && list2) {
        if (list1.val < list2.val){
            let newNode = new ListNode(list1.val)
            linkedList.next = newNode
            list1 = list1.next
        }else {
            let newNode = new ListNode(list2.val)
            linkedList.next = newNode
            list2 = list2.next
        }
        linkedList = linkedList.next
    }

    if (list1) linkedList.next = list1
    if (list2) linkedList.next = list2

    return dummy.next
};
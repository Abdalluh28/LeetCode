var reverseKGroup = function(head, k) {
    if (!head || k === 1) return head;

    let dummy = new ListNode(0, head);
    let prevGroupEnd = dummy;
    
    while (head) {
        let tail = head;
        // Check if there are k nodes left
        for (let i = 1; i < k; i++) {
            tail = tail.next;
            if (!tail) return dummy.next; // Not enough nodes, return as is
        }

        let nextGroupStart = tail.next;
        // Reverse the k nodes
        let [newHead, newTail] = reverseLinkedList(head, k);
        
        // Connect previous group to new head
        prevGroupEnd.next = newHead;
        newTail.next = nextGroupStart;
        
        // Move to the next group
        prevGroupEnd = newTail;
        head = nextGroupStart;
    }

    return dummy.next;
};

// Function to reverse k nodes
function reverseLinkedList(head, k) {
    let prev = null, curr = head;
    while (k--) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return [prev, head]; // New head and new tail after reversal
}

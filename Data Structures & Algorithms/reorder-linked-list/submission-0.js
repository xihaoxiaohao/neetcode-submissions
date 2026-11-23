/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head.next;
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        
        let second = slow.next;
        slow.next = null;
        let pre = null;
        while (second) {
            const nex = second.next;
            second.next = pre;
            pre = second;
            second = nex;
        }

        let p1 = head;
        let p2 = pre;
        while (p2) {
            const nex1 = p1.next;
            const nex2 = p2.next;
            p1.next = p2;
            p2.next = nex1;
            p1 = nex1;
            p2 = nex2;
        }
        return head;
    }
}

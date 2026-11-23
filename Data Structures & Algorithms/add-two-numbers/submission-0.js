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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode();
        let cur = dummy;

        let p1 = l1;
        let p2 = l2;
        let sum = 0;
        let carry = 0;

        while (p1 || p2) {
            sum = carry;
            if (p1) {
                sum += p1.val;
                p1 = p1.next;
            }
            if (p2) {
                sum += p2.val;
                p2 = p2.next;
            }
            cur.next = new ListNode(sum % 10);
            carry = Math.floor(sum / 10);
            cur = cur.next;
        }

        if (carry === 1) {
            cur.next = new ListNode(1);
        }

        return dummy.next;
    }
}

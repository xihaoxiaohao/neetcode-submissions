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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let cur = head;
        let cnt = 0;
        while (cur && cnt < k) {
            cur = cur.next;
            cnt += 1;
        }

        if (cnt === k) {
            cur = this.reverseKGroup(cur, k);
            while (cnt > 0) {
                let tmp = head.next;
                head.next = cur;
                cur = head;
                head = tmp;
                cnt -= 1;
            }
            head = cur;
        }

        return head;
    }
}

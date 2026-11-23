// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    constructor() {
        this.hm = new Map();
    }

    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (head === null) return null;
        if (this.hm.get(head)) return this.hm.get(head);

        const copy = new Node(head.val);
        this.hm.set(head, copy);

        copy.next = this.copyRandomList(head.next);
        copy.random = this.hm.get(head.random) || null;

        return copy;
    }
}

class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;
        this.cache = new Map();
        this.left = new Node(0, 0);
        this.right = new Node(0, 0);
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.cache.has(key)) return -1;

        const temp = this.cache.get(key);
        this.remove(temp);
        this.insert(temp);
        return temp.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }

        const newNode = new Node(key, value);
        this.insert(newNode);
        this.cache.set(key, newNode);

        if (this.cache.size > this.cap) {
            const lruKey = this.left.next.key;
            this.remove(this.left.next);
            this.cache.delete(lruKey);
        }
    }

    remove(node) {
        const pre = node.prev;
        const nex = node.next;
        pre.next = nex;
        nex.prev = pre;
    }

    insert(node) {
        const pre = this.right.prev;
        pre.next = node;
        node.prev = pre;
        node.next = this.right;
        this.right.prev = node;
    }
}

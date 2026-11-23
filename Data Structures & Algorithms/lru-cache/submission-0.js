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

        const node = this.cache.get(key);
        this.remove(node);
        this.insert(node);
        return node.val;
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
        this.cache.set(key, newNode);
        this.insert(newNode);

        if (this.cache.size > this.cap) {
            const lru = this.left.next;
            this.remove(lru);
            this.cache.delete(lru.key);
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

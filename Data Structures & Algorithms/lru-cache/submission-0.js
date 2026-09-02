class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
class LRUCache {
    
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        // Dummy nodes
        this.head = new Node(0, 0); // LRU side
        this.tail = new Node(0, 0); // MRU side

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    addToTail(node) {
        node.prev = this.tail.prev;
        node.next = this.tail;

        this.tail.prev.next = node;
        this.tail.prev = node;
    }
    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.has(key)) {
            return -1;
        }

        const node = this.map.get(key);

        // Recently used -> move to tail
        this.remove(node);
        this.addToTail(node);

        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // Key already exists
        if (this.map.has(key)) {
            const node = this.map.get(key);

            node.value = value;

            // Move to MRU position
            this.remove(node);
            this.addToTail(node);

            return;
        }

        // Create new node
        const node = new Node(key, value);

        this.map.set(key, node);
        this.addToTail(node);

        // Capacity exceeded
        if (this.map.size > this.capacity) {
            const lru = this.head.next;

            this.remove(lru);
            this.map.delete(lru.key);
        }
    }
}

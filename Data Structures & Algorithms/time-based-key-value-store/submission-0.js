class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) {
            return '';
        }
        const arr = this.keyStore.get(key);
        let left = 0;
        let right = arr.length - 1;
        let res = '';

        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            const [ts, val] = arr[mid];
            if (ts <= timestamp) {
                res = val;
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return arr[left][0] <= timestamp ? arr[left][1] : res;
    }
}

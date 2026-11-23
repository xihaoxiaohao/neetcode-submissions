class CountSquares {
    constructor() {
        this.hm = new Map();
    }

    /**
     * @param {number[]} point
     * @return {void}
     */
    add(point) {
        const key = `${point[0]}-${point[1]}`;
        this.hm.set(key, (this.hm.get(key) || 0) + 1);
    }

    /**
     * @param {number[]} point
     * @return {number}
     */
    count(point) {
        let res = 0;
        const [x1, y1] = point;

        for (const [key, cnt] of this.hm) {
            const [x2, y2] = key.split("-").map(Number);

            // if not diagonal point then continue
            if (x1 === x2 || Math.abs(x1 - x2) !== Math.abs(y1 - y2)) {
                continue;
            }

            const p1 = `${x1}-${y2}`;
            const p2 = `${x2}-${y1}`;

            const cnt1 = this.hm.get(p1) || 0;
            const cnt2 = this.hm.get(p2) || 0;

            res += cnt * cnt1 * cnt2;
        }

        return res;
    }
}

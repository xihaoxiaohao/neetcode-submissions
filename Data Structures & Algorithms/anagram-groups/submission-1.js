class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const arr = strs.map(s => s.split(''));
        for (const subArr of arr) {
            subArr.sort((a, b) => a.localeCompare(b));
        }
        const sortedArr = arr.map((e) => e.join(''));

        const hm = new Map();
        for (let i = 0; i < sortedArr.length; i++) {
            const s = sortedArr[i];
            if (!hm.has(s)) {
                hm.set(s, []);
            }
            hm.get(s).push(strs[i]);
        }

        return [...hm.values()];
    }
}

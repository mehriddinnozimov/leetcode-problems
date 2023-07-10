declare global {
    interface Array<T> {
        last(): T | -1;
    }
}

Array.prototype.last = function () {
    const result = this[this.length - 1]
    if (typeof result === 'undefined') return -1
    return result
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

export { };

export default {}

// https://leetcode.com/problems/array-prototype-last/
class ArrayWrapper {
    constructor(private nums: number[]) {

    }

    valueOf() {
        return this.nums.reduce((p, c) => p + c, 0)
    }

    toString() {
        return JSON.stringify(this.nums)
    }
};

export default {}

// https://leetcode.com/problems/array-wrapper/
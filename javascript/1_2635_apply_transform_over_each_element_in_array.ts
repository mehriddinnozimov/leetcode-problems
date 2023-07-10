function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i))
    }
    return result
};

export default {}

// https://leetcode.com/problems/apply-transform-over-each-element-in-array/
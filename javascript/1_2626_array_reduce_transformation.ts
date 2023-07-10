type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    for(let i = 0; i < nums.length; i++) {
        const result = fn(init, nums[i])
        init = result
    }

    return init
};

export default {}

// https://leetcode.com/problems/array-reduce-transformation/
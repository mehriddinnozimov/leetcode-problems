function sortBy(arr: any[], fn: Function): any[] {
    arr.sort((a, b) => fn(a) - fn(b))
    return arr
};

export default {}

// https://leetcode.com/problems/sort-by/
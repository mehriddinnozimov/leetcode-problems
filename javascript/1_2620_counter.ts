const createCounter = function (n: number) {
    return function () {
        return n++
    };
};

export default {}

// https://leetcode.com/problems/counter/description/
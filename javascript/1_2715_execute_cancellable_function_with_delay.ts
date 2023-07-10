function cancellable(fn: Function, args: any[], t: number): Function {
    const timeoutId = setTimeout(() => fn(...args), t)
    return function () {
        clearTimeout(timeoutId)
    }
};

export default {}

// https://leetcode.com/problems/execute-cancellable-function-with-delay/
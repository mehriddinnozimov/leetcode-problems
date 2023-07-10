function cancellable(fn: Function, args: any[], t: number): Function {
    fn(...args)
    const interval = setInterval(() => fn(...args), t)
    return function () {
        clearInterval(interval)
    }
};

export default {}

// https://leetcode.com/problems/interval-cancellation/
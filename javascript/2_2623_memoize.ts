type Fn = (...params: any) => any

function memoize(fn: Fn): Fn {
    const cache: { [x: string]: any } = {}
    return function (...args: any[]) {
        const argsString = args.join(',')
        if (typeof cache[argsString] !== 'undefined') {
            return cache[argsString]
        }

        const result = fn(...args)
        cache[argsString] = result
        return result
    }
}

export default {}

// https://leetcode.com/problems/memoize/
async function promiseAll<T>(functions: (() => Promise<T>)[]): Promise<T[]> {
    return new Promise(async (resolve, reject) => {
        const result: any[] = []
        let resolvedCount = 0
        for (let i = 0; i < functions.length; i++) {
            const fn = functions[i]
            fn().then((v) => {
                result[i] = v
                resolvedCount++
                if (resolvedCount === functions.length) resolve(result)
            }).catch(err => reject(err))
        }
    })
};

export default {}

// https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/
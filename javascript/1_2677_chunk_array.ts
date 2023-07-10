function chunk(arr: any[], size: number): any[][] {
    const result: any[][] = []
    let chunk: any[] = []
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i]

        if (i > 0 && i % size === 0) {
            result.push(chunk)
            chunk = []
        }
        chunk.push(el)
    }
    if (chunk.length > 0) result.push(chunk)
    return result
};

export default {}

// https://leetcode.com/problems/chunk-array/submissions/976300618/
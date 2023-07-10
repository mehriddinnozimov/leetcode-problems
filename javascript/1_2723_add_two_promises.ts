async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
    const r1 = await promise1
    const r2 = await promise2

    return r1 + r2
};

export default {}

// https://leetcode.com/problems/add-two-promises/
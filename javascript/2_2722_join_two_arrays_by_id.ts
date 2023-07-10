function join(arr1: any[], arr2: any[]): any[] {
    const result: any[] = []
    const temp = [...arr1, ...arr2].sort((a, b) => a.id - b.id)

    for (let i = 0; i < temp.length; i++) {
        const el = temp[i]
        const prevEl = temp[i - 1]
        if (prevEl && prevEl.id === el.id) {
            Object.assign(prevEl, el)
        } else {
            result.push(el)
        }
    }

    return result
};

export default {}

// https://leetcode.com/problems/join-two-arrays-by-id/
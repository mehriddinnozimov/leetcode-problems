declare global {
    interface Array<T> {
        snail(rowsCount: number, colsCount: number): number[][];
    }
}

Array.prototype.snail = function (rowsCount: number, colsCount: number): number[][] {
    if (rowsCount * colsCount !== this.length) return []
    const result: number[][] = new Array(rowsCount).fill([]).map(function () { return [] })
    let colsIndex = 0
    let rowIndex = 0
    let rowIncraceNumber = 1
    let waitOneTime = false


    for (let index = 0; index < this.length; index++) {
        if (colsIndex >= colsCount) {
            colsIndex = 0
        }
        if (index > 0 && index % rowsCount === 0) colsIndex += 1

        result[rowIndex][colsIndex] = this[index]

        if (rowIndex >= rowsCount - 1) {
            rowIncraceNumber = waitOneTime ? 0 : -1
            waitOneTime = !waitOneTime
        } else
            if (rowIndex === 0) {
                rowIncraceNumber = waitOneTime ? 0 : 1
                waitOneTime = !waitOneTime
            }
        rowIndex += rowIncraceNumber
        if (rowIndex < 0) rowIndex = 0
    }

    return result
}


export default {}

// https://leetcode.com/problems/snail-traversal/
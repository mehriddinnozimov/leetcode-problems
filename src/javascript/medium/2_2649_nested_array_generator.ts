type MultidimensionalArray = (MultidimensionalArray | number)[]

function* inorderTraversal(arr: MultidimensionalArray): Generator<number, void, unknown> {
  for (const el of arr) {
    if (Array.isArray(el)) yield* inorderTraversal(el); else
      yield el as number;
  }
}

export default {};

// https://leetcode.com/problems/nested-array-generator/
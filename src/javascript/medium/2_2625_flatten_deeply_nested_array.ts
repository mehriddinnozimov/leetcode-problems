type MultiDimensionalArray = (number | MultiDimensionalArray)[];

const flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  if (n <= 0) return arr;
  const result: typeof arr = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (Array.isArray(el)) {
      const flatArray = flat(el, n - 1);
      result.push(...flatArray);
    } else {
      result.push(el);
    }
  }

  return result;
};

export default {};

// https://leetcode.com/problems/flatten-deeply-nested-array/
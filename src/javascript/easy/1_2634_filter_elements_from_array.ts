function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  const result: number[] = [];
  arr.forEach((el, index) => {
    if (fn(el, index)) result.push(el);
  });
  return result;
}

export default {};

// https://leetcode.com/problems/filter-elements-from-array/
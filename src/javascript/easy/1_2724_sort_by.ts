function sortBy<F extends  (...args: any[]) => any>(arr: any[], fn: F): any[] {
  arr.sort((a, b) => fn(a) - fn(b));
  return arr;
}

export default {};

// https://leetcode.com/problems/sort-by/
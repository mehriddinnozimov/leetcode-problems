declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): Record<string, T[]>
    }
}

Array.prototype.groupBy = function (fn) {
  const result: Record<string, any> = {};

  for (const el of this) {
    const key = fn(el);

    if (result[key]) {
      result[key].push(el);
    } else {
      result[key] = [el];
    }
  }

  return result;
};

export default {};

// https://leetcode.com/problems/group-by/
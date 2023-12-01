type Fn = (...args: any[]) => any

function once(fn: Fn): Fn {
  const cache: Fn[] = [];
  return function (...args) {
    if (!cache.some((v) => v === fn)) {
      cache.push(fn);
      return fn(...args);
    }
  };
}

export default {};

// https://leetcode.com/problems/allow-one-function-call/
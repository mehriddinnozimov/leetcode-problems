function cancellable<F extends  (...args: any[]) => any>(fn: F, args: Parameters<F>, t: number): () => void {
  const timeoutId = setTimeout(() => fn(...args), t);
  return function () {
    clearTimeout(timeoutId);
  };
}

export default {};

// https://leetcode.com/problems/execute-cancellable-function-with-delay/
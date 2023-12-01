function cancellable<F extends  (...args: any[]) => any>(fn: F, args: Parameters<F>, t: number): () => void {
  fn(...args);
  const interval = setInterval(() => fn(...args), t);
  return function () {
    clearInterval(interval);
  };
}

export default {};

// https://leetcode.com/problems/interval-cancellation/
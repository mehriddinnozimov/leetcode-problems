type F = (...p: any[]) => any

function debounce(fn: F, t: number): F {
  let memo: { t: number, exId: any }[] = [];
  return function (...args) {
    const now = Date.now();
    memo = memo.filter(ob => {
      if (ob.t > now) clearTimeout(ob.exId);
      else return ob;
    });
    memo.push({ t: now + t, exId: setTimeout(() => { fn(...args); }, t) });
  };
}

export default {};

// https://leetcode.com/problems/debounce/
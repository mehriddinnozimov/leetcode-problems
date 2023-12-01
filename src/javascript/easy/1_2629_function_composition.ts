type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x) {
    for (let i = functions.length - 1; i > -1; i--) {
      const fn = functions[i];
      x = fn(x);
    }
    return x;
  };
}


export default {};

// https://leetcode.com/problems/function-composition/
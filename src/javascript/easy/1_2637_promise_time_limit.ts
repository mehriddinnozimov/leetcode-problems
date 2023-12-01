type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      const tID = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
      fn(...args).then(result => {
        clearTimeout(tID);
        resolve(result);
      }).catch(err => reject(err));

    });
  };
}


export default {};

// https://leetcode.com/problems/promise-time-limit/
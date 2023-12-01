function cancellable<T>(generator: Generator<Promise<any>, T, unknown>): [() => void, Promise<T>] {
  let isCancelled = false;
  function cancel() {
    isCancelled = true;
  }

  // eslint-disable-next-line no-async-promise-executor
  const promise = new Promise<T>(async (resolve, reject) => {
    try {
      let lastYielded = generator.next();
      while (!lastYielded.done) {
        if (isCancelled) lastYielded = generator.throw("Cancelled");
        if (lastYielded.done) {
          break;
        }
        try {
          const res = await lastYielded.value;
          if (isCancelled) lastYielded = generator.throw("Cancelled");
          if (lastYielded.done) {
            break;
          }
          lastYielded = generator.next(res);
        } catch (err) {
          lastYielded = generator.throw(err);
        }
      }
      // if(isCancelled) throw "Cancelled"
      resolve(lastYielded.value);
    } catch (err) {
      reject(err);
    }
  });

  return [cancel, promise];
}

export default {};

// https://leetcode.com/problems/design-cancellable-function/
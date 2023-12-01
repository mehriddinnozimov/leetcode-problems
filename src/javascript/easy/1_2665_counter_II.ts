type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
  const value = {
    current: init,
    init
  };
  return {
    increment() {
      return ++value.current;
    },
    decrement() {
      return --value.current;
    },
    reset() {
      value.current = value.init;
      return value.current;
    }
  };
}

export default {};
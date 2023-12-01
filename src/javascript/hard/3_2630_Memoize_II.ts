type Fn = (...params: any) => any

let count: number = 1;
const idMap: WeakMap<Record<string, unknown> | Array<unknown>, number> = new WeakMap<Record<string, unknown> | Array<unknown>, number>();
function getObjectId(object: Record<string, unknown> | Array<unknown>): number {
  const objectId: number | undefined = idMap.get(object);
  if (objectId === undefined) {
    count += 1;
    idMap.set(object, count);

    return count;
  }

  return objectId;
}

function memoize(fn: Fn): Fn {
  const cache: Record<string, { args: any[], result: any }> = {};
  return function (...args: any[]) {
    const argsString = args.map(arg => {
      if (arg && typeof arg === "object") {
        return "obj" + getObjectId(arg);
      } else {
        return String(arg);
      }
    }).join(",");

    const cached = cache[argsString];
    if (typeof cached !== "undefined") {
      let isMatch = false;
      if (cached.args.length === args.length) {
        isMatch = true;
        for (let i = 0; i < args.length; i++) {
          if (args[i] !== cached.args[i]) {
            isMatch = false;
            i = Infinity;
          }
        }

        if (isMatch) return cached.result;
      }
    }

    const result = fn(...args);
    cache[argsString] = { args, result };
    return result;
  };
}

export default {};

// https://leetcode.com/problems/memoize-ii/
type Obj = Record<any, any>;

function compactObject(obj: Obj): Obj {
  if (Array.isArray(obj)) {
    const result: Obj = [];

    for (let i = 0; i < obj.length; i++) {
      let val = obj[i];
      if (typeof val === "object" && val !== null) {
        val = compactObject(val);
      }
      if (val) {
        result.push(val);
      }
    }

    return result;
  } else {
    const result: Obj = {};
    const keys = Object.keys(obj);

    for (const key of keys) {
      let val = obj[key];

      if (typeof val === "object" && val !== null) {
        val = compactObject(val);
      }
      if (val) result[key] = val;
    }
    return result;
  }
}

export default {};

// https://leetcode.com/problems/compact-object/
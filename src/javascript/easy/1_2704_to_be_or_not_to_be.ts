type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe(v) {
      const result = v === val;
      if (!result) throw new Error("Not Equal");
      return result;
    },
    notToBe(v) {
      const result = v !== val;
      if (!result) throw new Error("Equal");
      return result;
    }
  };
}


export default {};

// https://leetcode.com/problems/to-be-or-not-to-be/
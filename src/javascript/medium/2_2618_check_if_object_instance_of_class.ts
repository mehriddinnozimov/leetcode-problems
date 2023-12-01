function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  try {
    return typeof obj !== "undefined" &&
            obj !== null &&
            typeof classFunction === "function" &&
            (
              classFunction === Function ||
                classFunction === Object ||
                obj !== classFunction &&
                (
                  obj instanceof classFunction ||
                    obj.constructor === classFunction
                )
            );
  } catch {
    return false;
  }
}

export default {};

// https://leetcode.com/problems/check-if-object-instance-of-class/
declare global {
    interface Function {
        callPolyfill(context: Record<any, any>, ...args: any[]): any;
    }
}

Function.prototype.callPolyfill = function (this: any, context, ...args): any {
  const keys = Object.keys(context);
  for (const key of keys) {
    this[key] = context[key];
  }
  return this.bind(this)(...args);
};

export default {};

// https://leetcode.com/problems/call-function-with-custom-context/
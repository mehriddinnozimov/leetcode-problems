export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
  }
}

export function serialize(root: TreeNode | null): string {
  let result = "";
  if(!root) return "()";



  result += root.val;

  result += "(";

  result += serialize(root.left);
  result += serialize(root.right);

  result += ")";

  return result;
}

export function deserialize(data: string): TreeNode | null {
  const stack = [];
  const cache = new Map<TreeNode, boolean>();
  let tempValue = "";

  for(const s of data) {
    if(s === "(") {
      const value = parseInt(tempValue);

      stack.unshift(Number.isNaN(value) ? null : new TreeNode(value));

      tempValue = "";
      continue;
    }

    if(s === ")") {
      const last = stack.shift();


      if(stack.length === 0 && typeof last !== "undefined") {
        return last;
      }
      const f = stack[0];
      if(f) {
        const isRight = cache.get(f);

        if(!isRight) {
          f.left = last || null;

          cache.set(f, true);
        } else {
          f.right = last || null;
          cache.delete(f);
        }
      }

      continue;
    }

    tempValue += s;
  }
  return null;
}


// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
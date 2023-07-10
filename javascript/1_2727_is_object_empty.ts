function isEmpty(obj: Record<string, any> | any[]): boolean {
    if (Array.isArray(obj)) return obj.length === 0;
    return Object.keys(obj).length === 0
};

export default {}

// https://leetcode.com/problems/is-object-empty/
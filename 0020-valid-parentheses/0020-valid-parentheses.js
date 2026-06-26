/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    for (let ch of s) {
        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(ch)
        } else {
            if (ch === ')') {
                if (stack.pop() !== '(') return false
            }
            if (ch === ']') {
                if (stack.pop() !== '[') return false
            }
            if (ch === '}') {
                if (stack.pop() !== '{') return false
            }
        }
    }
    if (stack.length>0) return false
    return true;
};
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    for (let ch of tokens) {
        if (ch === '+' || ch === '-' || ch === '*' || ch === '/') {
            let num1 = stack.pop()
            let num2 = stack.pop()
            if (ch === '+') {
                stack.push(num2 + num1)
            } else if (ch === '-') {
                stack.push(num2 - num1)
            } else if (ch === '*') {
                stack.push(num2 * num1)
            } else {
                stack.push(Math.trunc(num2 / num1))
            }
        } else {
            stack.push(Number(ch))
        }
    }
    return stack.pop()
};
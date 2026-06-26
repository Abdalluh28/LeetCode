/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let arr = [];
    let one, two;
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] !== '+' && tokens[i] !== '-' && tokens[i] !== '*' && tokens[i] !== '/') {
            arr.push(Number(tokens[i]));
        } else {
            two = arr.pop();
            one = arr.pop();
            if (tokens[i] === '+') {
                arr.push(one + two);
            } else if (tokens[i] === '-') {
                arr.push(one - two);
            } else if (tokens[i] === '*') {
                arr.push(one * two);
            } else {
                arr.push(Math.trunc(one / two));
            }
        }
    }
    return arr.pop()
};
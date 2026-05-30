/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    // add open parenthese if open < n
    // add close parenthese if close < open
    // valid if open === close === n
    let open = 0, close = 0, result = [];

    let backTrack = (current, open, close) => {
        if (current.length === n * 2) {
            result.push(current)
            return;
        }

        if (open < n) {
            backTrack(current + '(', open + 1, close);
        }

        if (close < open) {
            backTrack(current + ')', open, close + 1);
        }
    }

    backTrack('', 0, 0)
    return result;
};
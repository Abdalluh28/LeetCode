/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    let temp;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[' ) {
            arr.push(s[i]);
        } else {
            if (arr.length === 0) return false
            temp = arr.pop();
            if ( (temp === '(' && s[i] === ')') || (temp === '{' && s[i] === '}') || (temp === '[' && s[i] === ']')  ) {

            } else {
                return false
            }
        }
    }
    if (arr.length > 0) return false;
    return true;
};
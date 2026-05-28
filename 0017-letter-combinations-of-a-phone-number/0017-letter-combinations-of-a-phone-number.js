/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits === '') return []
    let res = [];
    let obj = {
        "2": 'abc',
        "3": 'def',
        "4": 'ghi',
        "5": 'jkl',
        "6": 'mno',
        '7': 'pqrs',
        "8": 'tuv',
        "9": 'wxyz',
    }


    let backtrack = (path, idx) => {
        if (idx >= digits.length) {
            res.push(path)
            return;
        }

        let char = digits[idx];

        for (let i = 0; i < obj[char].length; i++) {
            path += obj[char][i]
            backtrack(path, idx + 1)
            path = path.slice(0, -1)
        }
    }

    backtrack('', 0)
    return res;
};
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let res = []
    candidates = candidates.sort((a, b) => a - b)

    let backtrack = (path, sum, start) => {
        if (sum === target) {
            res.push([...path])
            return
        } else if (sum > target) {
            return
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue;
            path.push(candidates[i])
            backtrack(path, sum + candidates[i], i + 1)
            path.pop()
        }
    }

    backtrack([], 0, 0)

    return res

};
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {

    let res = []

    let backtrack = (path, sum, start) => {

        if (sum === target) {
            res.push([...path])
            return
        } else if (sum > target) {
            return
        }

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i])
            backtrack(path, sum + candidates[i], i)
            path.pop()
        }
    }

    backtrack([], 0, 0)

    return res
};
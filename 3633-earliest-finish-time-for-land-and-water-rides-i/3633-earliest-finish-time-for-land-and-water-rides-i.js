/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    let res = Infinity;
    for (let i = 0; i < landStartTime.length; i++) {
        let temp = landStartTime[i] + landDuration[i]
        if (res <= temp) continue;
        for (let j = 0; j < waterStartTime.length; j++) {
            let tempOne = Math.max(temp, waterStartTime[j])
            let tempTwo = waterDuration[j]
            res = Math.min(res, tempOne + tempTwo);
        }
    }
    for (let i = 0; i < waterStartTime.length; i++) {
        let temp = waterStartTime[i] + waterDuration[i]
        if (res <= temp) continue;
        for (let j = 0; j < landStartTime.length; j++) {
            let tempOne = Math.max(temp, landStartTime[j])
            let tempTwo = landDuration[j]
            res = Math.min(res, tempOne + tempTwo);
        }
    }
    return res;
};
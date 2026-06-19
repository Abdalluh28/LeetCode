/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let maxEle = 0;
    gain.unshift(0);
    for (let i = 1; i < gain.length; i++) {
        gain[i] += gain[i-1]
        maxEle = Math.max(maxEle, gain[i]);
    }

    return maxEle

};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort( (a,b) => a-b)
    let length = nums.length;
    let arr = []

    for (let i = 0; i < length; i++) {
        let ptrOne = i+1;
        let ptrTwo = length-1
        let sum = 0;
        while(ptrOne < ptrTwo) {
            sum = nums[i] + nums[ptrOne] + nums[ptrTwo]
            if(sum > 0) {
                ptrTwo--;
            }else if (sum < 0) {
                ptrOne++;
            }else {
                arr.push([nums[i], nums[ptrOne], nums[ptrTwo]])
                ptrOne++;
                ptrTwo--;
            }
        }
        if (nums[i] === nums[i+1]) i++;
    }
    arr = Array.from(new Set(arr.map(JSON.stringify)), JSON.parse);

    return arr
};
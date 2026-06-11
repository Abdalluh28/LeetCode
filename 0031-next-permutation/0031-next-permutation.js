/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
    // at any number search for bigger number in the array next to it
    let ptrOne, ptrTwo, biggestNumber, temp, indexOne, indexTwo;

    for(ptrOne = nums.length-2; ptrOne>=0; ptrOne--) {
        biggestNumber=101;
        for(ptrTwo = nums.length-1; ptrTwo>ptrOne; ptrTwo--) {
            if(nums[ptrTwo] > nums[ptrOne]) {
                temp = nums[ptrTwo];
            }
            if(temp<biggestNumber){
                biggestNumber = temp
                indexOne = ptrOne
                indexTwo = ptrTwo
            }
        }
        if(biggestNumber!=101) {
            temp = nums[indexOne];
            nums[indexOne] = nums[indexTwo];
            nums[indexTwo] = temp;
            let subset = nums.slice(indexOne+1, nums.length);
            subset.sort( (a,b) => a-b );
            nums.splice(indexOne+1, nums.length-indexOne-1, ...subset);
            return
        }
    }

    nums = nums.sort((a,b) => a-b);
    
};
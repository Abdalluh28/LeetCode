var removeElement = function(nums, val) {
    let k = 0; // Pointer for valid elements

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // Overwrite unwanted values
            k++; // Move the pointer
        }
    }

    return k; // New length of the array
};

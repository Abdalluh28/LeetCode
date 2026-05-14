/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let length = 0, ptrOne;
    let map = new Map();

    for (ptrOne = 0; ptrOne < s.length; ptrOne++) {
        if (!map.has(s[ptrOne])) {
            // add it and increment the counter

            map.set(s[ptrOne], ptrOne);

        }else {
            // remove it and all elements before it
            // add it with new index and update the counter
            length = Math.max(length, map.size);
            for (let [key, value] of map) {
                map.delete(key);
                if (key === s[ptrOne]) break;
            }
            map.set(s[ptrOne], ptrOne);

        }
    }

    length = Math.max(length, map.size);

    return length;
    // abcebdfj
};
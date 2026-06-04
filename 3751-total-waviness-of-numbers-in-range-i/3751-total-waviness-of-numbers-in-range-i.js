/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function (num1, num2) {
    let res = 0;

    let calcWaviness = (num) => {
        num = num.toString();
        let count = 0;
        for (let i = 1; i < num.length - 1; i++) {
            if (
                (num[i] > num[i + 1] && num[i] > num[i - 1]) ||
                (num[i] < num[i + 1] && num[i] < num[i - 1])
            ) {
                count++;
            }
        }
        return count;
    };

    for (let i = num1; i <= num2; i++) {
        res += calcWaviness(i);
    }

    return res;

};
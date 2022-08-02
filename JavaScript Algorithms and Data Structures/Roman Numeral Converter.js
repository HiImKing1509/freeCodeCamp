function convertToRoman(num) {
    const decNumbers = [
        [1, "I"],
        [4, "IV"],
        [5, "V"],
        [9, "IX"],
        [10, "X"],
        [40, "XL"],
        [50, "L"],
        [90, "XC"],
        [100, "C"],
        [400, "CD"],
        [500, "D"],
        [900, "CM"],
        [1000, "M"],
    ];
    var resString = "";
    while (num >= 1) {
        for (let i = decNumbers.length - 1; i >= 0; i--) {
            if (decNumbers[i][0] <= num) {
                resString += decNumbers[i][1];
                num -= decNumbers[i][0];
                break;
            }
        }
    }
    return resString;
}
console.log(convertToRoman(44));

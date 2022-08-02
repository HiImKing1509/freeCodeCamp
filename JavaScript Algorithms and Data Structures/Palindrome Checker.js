function palindrome(str) {
    const arr = str
        .split(/[^A-Za-z0-9]/)
        .join("")
        .toLowerCase()
        .split("");
    var j = arr.length - 1;
    for (let i = 0; i < j; i++, j--) {
        if (arr[i] !== arr[j]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome("1 eye for of 1 eye."));

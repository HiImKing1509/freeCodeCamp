function rot13(str) {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    var newString = "";
    str.split("").forEach((element) => {
        if (alphabet.includes(element)) {
            newString += alphabet[(alphabet.indexOf(element) + 13) % 26];
        } else {
            newString += element;
        }
    });
    return newString;
}

console.log(rot13("SERR CVMMN!"));

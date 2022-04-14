function truncate(string, number) {
    return string.substring(0, string.length - number);
}

console.log(truncate("Hello World!", 1));
console.log(truncate("JavaScript", 6));
console.log(truncate("TPEO", 4));

function capitalizeAllFirstLetters(strings) {
    for (var i = 0; i < strings.length; i++) {
        strings[i] = strings[i][0].toUpperCase() + strings[i].substring(1);
    }
    return strings;
}

console.log(capitalizeAllFirstLetters(["brayden", "mindy"]));

function swapcase(string) {
    var lowercase = string.toLowerCase();
    var uppercase = string.toUpperCase();
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] == uppercase[i]) {
            newString += lowercase[i];
        } else {
            newString += uppercase[i];
        }
    }
    return newString;
}

console.log(swapcase("aBc"));
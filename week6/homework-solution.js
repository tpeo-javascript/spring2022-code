/*
Question 1: Write a function, reverse, that accepts one parameter: string. 
In the function, return the string but reversed (Example: if “hey” is the 
input, then return “yeh”). Call this function three times each with 
different inputs and print the results to the terminal.
*/
function reverse(string) {
    var reversedString = "";
    for (var i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}
console.log(reverse("hey")); // prints "yeh"
console.log(reverse("Coding")); // prints "gnidoC"
console.log(reverse("JavaScript!")); // prints "!tpircSavaJ"

/*
Question 2: Write a function, numVowels, that accepts one parameter: string. 
In the function, return the number of vowels string has. Call this function 
three times each with different inputs and print the results to the terminal.
*/
function numVowels(string) {
    var numVowels = 0;
    string = string.toLowerCase();
    for (var i = 0; i < string.length; i++) {
        var currentCharacter = string[i];
        if (currentCharacter === "a" || currentCharacter === "e" || currentCharacter === "i"
            || currentCharacter === "o" || currentCharacter === "u") {
                numVowels++;
            }
    }
    return numVowels;
}
console.log(numVowels("aaaeeeiiiooouuu")); // 15
console.log(numVowels("b")); // 0
console.log(numVowels("aeiouAEIOU")); // 10

/*
Question 3: Write a function, numStringsShorterThanLength that accepts two parameters: 
strings (an array of strings) and length (a number). In the function, return the number 
of strings in strings that have a length less than length. Call this function three times 
each with different inputs and print the results to the terminal.
*/
function numStringsShorterThanLength(strings, length) {
    var numStringsShorterThanLength = 0;
    for (var i = 0; i < strings.length; i++) {
        if (strings[i].length < length) {
            numStringsShorterThanLength++;
        }
    }
    return numStringsShorterThanLength;
}
console.log(numStringsShorterThanLength(["abc", "def"], 4)); // 2
console.log(numStringsShorterThanLength(["abc", "def"], 3)); // 0
console.log(numStringsShorterThanLength(["abc", "def", "abcdef"], 4)); // 2
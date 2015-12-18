// Step By Step
// ♫ I put my string down flip it and reverse it ♫
function Palindrome(str) {

    // First, we prep the string by using the .replace method to take out all spaces.
    // Note that [\s] will match all whitespace in the string.
    str = str.replace(/[\s]/g, "");

    // Next, we declare a new variable to hold the reversed string and use the .split, .reverse, and .join methods to modify it.
    // You should remember this section from the very first problem (check out my solution in this repository if you need a refresher).
    strRev = str.split("").reverse().join("");

    // Finally, we return the truth value of comparing the two strings.
    return str == strRev;
}

// Best Practices
// Note that while this problem doesn't use any inputs with uppercase letters, you can add in .toLowerCase() to account for inputs that do.
function Palindrome(str) {

    return str.replace(/[\s]/g, "").toLowerCase() == str.replace(/[\s]/g, "").toLowerCase().split("").reverse().join("");
}

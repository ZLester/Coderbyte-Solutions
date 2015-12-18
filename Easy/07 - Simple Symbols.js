// Step By Step
function SimpleSymbols(str) {
    
    // First, we declare a variable to hold a regex expression to match all upper and lowercase letters
    var alphaTest = /[a-zA-Z]/;
    
    // Next, we loop through each character in the string...
    for (var i = 0; i < str.length; i++) {
        // ... and use the our previously declared regex expression and the .test method to see if the character is a letter
        if (alphaTest.test(str[i])) {
            // If our test returns true, we check if either of the adjacent characters are not +'s
            if ((str[i + 1] != "+") || (str[i - 1] != "+")) {
                // If one of them isn't, we return false.
                return false;
            }
        }
    }
    
    // If our program is able to check all of the characters and hasn't returned false, we know the string obeys all of the problem's rules and can return true.
    return true;
}
   
// Best Practices
function SimpleSymbols(str) {
    
    for (var i = 0, x = str.length; i < x; i++) {
        if (/[a-zA-Z]/.test(str[i])) {
            if ((str[i + 1] != "+") || (str[i - 1] != "+")) {
                return false;
            }
        }
    }

    return true;
}

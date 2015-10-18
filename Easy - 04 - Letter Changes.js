// Step By Step
function LetterChanges(str) {

    // First we do a little meta-problem solving by setting up our alpha and newAlpha strings:
    // Each character in alpha has the same index as the character coderbyte wants us to convert it to in newAlpha
    // For instance, since we want all d's in our input string to be converted to e's, and then we want all vowels to be capitalized, 
    // we can "cheat" a by making alpha[3] equal to "d" and newAlpha[3] equal to "E".
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var newAlpha = "bcdEfghIjklmnOpqrstUvwxyzA";
    // Next, we declare a variable to hold our answer
    var answer = "";
    
    // After that, we loop through each character in our input string
    for (i = 0; i < str.length; i++) {
        // First, we use the indexOf method to check if the current character in our string is contained in alpha.
        // Note that if the string you pass into indexOf isn't found, it will return -1. Otherwise, it will return the index of the first matching character found.
        // For instance, alpha.indexOf("c") returns 2, while alpha.indexOf("C") returns -1. 
        if (alpha.indexOf(str[i]) !== -1) {
            // If we find the character in the alpha string, we declare a variable to hold the index of the character.
            // Note that this is an unnessary step that I do for the purposes of clarity. See the 2nd function for a faster implementation.
            var index = alpha.indexOf(str[i]);
            // Since we set up the characters in alpha to have the same index as the one we want to convert it to in newAlpha,
            // all we have to do is use the charAt method to add the converted character to our answer variable.
            answer += newAlpha.charAt(index);
        // If str[i] doesn't appear in alpha...
        } else {
            // ...we add it to our answer string, leaving any characters we don't want to change untouched and in the same index in our answer variable as they were in our input string.
            answer += str[i];
        }
    }
    // Finally, we return our answer.
    return answer;
}

// Without Comments
function LetterChanges(str) {

    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var newAlpha = "bcdEfghIjklmnOpqrstUvwxyzA";
    var answer = "";
    
    for (i = 0, i < str.length; i++) {
        if (alpha.indexOf(str[i]) !== -1) {
            answer += newAlpha.charAt(alpha.indexOf(str[i]));
        } else {
            answer += str[i];
        }
    }
    return answer;
}

// Step By Step
function LetterCapitalize(str) {
    // First, we use the split method to divide the input string into an array of individual words
    // Note that we pass a string consisting of a single space into the method to "split" the string at each space
    str = str.split(" ");
    
    // Next, we loop through each item in our new array...
    for (i = 0; i < str.length; i++) {
        // ...and set each word in the array to be equal to the first letter of the word (str[i][0]) capitalized using the toUpperCase method.
        // along with a substring of the remainder of the word (passing only 1 arg into the substr method means that you start at that index and go until the end of the string)
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    // Finally, we join our array back together...
    str = str.join(" ");
    
    // ...and return our answer.
    return str;
}

// Best Practices
function LetterCapitalize(str) {

    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

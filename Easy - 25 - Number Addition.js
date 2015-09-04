// Step By Step
function NumberAddition(str) {
    // First we charge our input string into an array by splitting it at every alphabetic character.
    // Note that this regex expression will match any capital or lowercase letter.
    str = str.split(/[a-zA-Z]/);
    // Next, we declare a sum variable to hold our answer.
    var sum = 0;
    // After that, we iterate over each element in our modified array...
    for (var i = 0; i < str.length; i++) {
        // ...and if it isn't an empty string...
        if (str[i] != "") {
            // ...we parse its value with parseInt and add it to our answer.
            sum += parseInt(str[i]);
        }
    }
    // Finally, we return our answer
    return sum;
}

// Without Comments
function NumberAddition(str) {
    str = str.split(/[a-zA-Z]/);
    var sum = 0;
    
    for (var i = 0; i < str.length; i++) {
        if (str[i] != "") {
            sum += parseInt(str[i]);
        }
    }
    
    return sum;
}

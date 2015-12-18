// Step By Step
function WordCount(str) {

    // First, we turn the input string into an array of words by passing a single space into the .split method...
    str = str.split(" ");

    // ...and return the length of the new array as our answer
    return str.length;
}

// Best Practices
function WordCount(str) {

    return str.split(" ").length;
}

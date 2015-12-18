// Using Native Array Methods
function FirstReverse(str) {
    
    // First, we need to use .split to change the string into an array so it can be further manipulated.
    // Passing "" (an empty string) into the method splits the string at every character.
    str = str.split("");

    // Next, we use the reverse method to reverse the order of the elements in our newly formed array.
    // Note that only arrays have the .reverse method, which is why we had to use .split.
    str = str.reverse();

    // After that, we use the .join method to reassemble our array back into a string. 
    // Passing an empty string here means that nothing gets inserted between each array element.
    str = str.join("");

    // Finally, we return the modified string
    return str;
}

// Using chaining
function FirstReverse(str) {
    return str.split("").reverse().join("");
}

// Without using native array methods
function FirstReverse(str) {
    
    // First, we declare a variable to hold our result and initialize it to an empty string.
    var result = "";
    
    // Next, we iterate over the input string in reverse, starting from the back (i = str.length - 1)...
    for (var i = str.length - 1; i >= 0; i--) {
        // ...and adding each character we hit to our result string.
        result += str[i];
    }
    
    // Finally, we return our result
    return result;
}

// Recursively
function FirstReverse(str, result) {
    
    // First, we use short-circuit evaluation to set up our result string.
    // If result is undefined (or any false-y value), this line will set it equal to an empty string. 
    // Otherwise, it will remain unchanged (result = result).
    result = result || "";
    
    // Next, we set up our only base case – when our input string has no letters left, we know it's time to return our result.
    if (str.length === 0) {
        return result;
    }
    
    // Each time we call the function, we add the last letter in the input string to our result...
    result += str[str.length - 1];
    // ...and remove the last letter from the input string with .slice. 
    str = str.slice(0, -1);
    // Note that the indexes passed to .slice are relative to the start of the string,
    // so -1 is the index of the last letter, -2 is the index of the 2nd to last letter, etc.
    
    // Finally, we call the function again, this time passing our modified string and result variables.
    return FirstReverse(str, result);
}

// Video Tutorial
// https://www.youtube.com/watch?v=Kk_-SvZGdto

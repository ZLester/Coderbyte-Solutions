// Step By Step
function VowelCount(str) {
    
    // Remove all characters in the string that aren't vowels with the .replace method...
    str = str.replace(/[^aeiuo]/g, "");
    
    // ...and return the strings length
    return str.length;
    
}

// Best Practices
function VowelCount(str) { 

  return str.replace(/[^aeiou]/g, "").length; 

}

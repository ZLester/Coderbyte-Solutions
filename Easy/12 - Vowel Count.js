// Step By Step
function VowelCount(str) {

    // First, we Remove all characters in the string that aren't vowels with the .replace method.
    // Note that ^ in Regex means "all characters not in the set", so placing it in front of aeiou means "Match everything that isn't a vowel"
    // Enclosing a set in [] means that our string matches any individual character in that set
    // Ending with our /g tag signifies that we want to do a global search and lets our engine know to going through the entire string.
    str = str.replace(/[^aeiuo]/g, "");
    
    // Finally, we return the length of the string to "count" how many vowels are left.
    return str.length;
}

// Best Practices
function VowelCount(str) { 

  return str.replace(/[^aeiou]/g, "").length; 
}

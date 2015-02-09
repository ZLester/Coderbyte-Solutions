// Step By Step
function AlphabetSoup(str) { 
  
  // Use .split to turn the string into an array 
  str = str.split("");
  
  // .sort to alphabatize the new array...
  str = str.sort();
  
  // and .join to turn it back into a string.
  str = str.join("");
  
  // Finally, return your answer.
  return str;

}

// Best Practices
function AlphabetSoup(str) { 
  
  return str.split("").sort().join("");

}

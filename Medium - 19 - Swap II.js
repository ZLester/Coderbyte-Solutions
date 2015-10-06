function SwapII(str) {
  // Regex to match any upper or lowercase character
  var testChar = /[a-zA-Z]/;
  // Regex to match a number, followed by any number (but at least one) alpha characters, followed by a number
  var testSwap = /[0-9][a-zA-Z]+[0-9]/g;
  var result = "";
  
  // Loop over the input string...
  for (var i = 0; i < str.length; i++) {
    // If the character is alphabetic...
    if (testChar.test(str[i])) {
      // ...and change it to lowercase if it's uppercase, and uppercase if it's lowercase
      if (str[i] == str[i].toUpperCase()) {
        result += str[i].toLowerCase();
      }
      else if (str[i] == str[i].toLowerCase()) {
        result += str[i].toUpperCase();
      }
      }
    // If it's some other character, add it to our result string.
    else {
      result += str[i];
    }
  }
  // Next, we use the .match method to return all substrings that meet the criteria of testSwap.
  var numSwaps = result.match(testSwap);
  // If there are matches...
  if (numSwaps !== null) {
    // Loop over the array of substrings and replace each one with the same string's first and last characters swapped
    for (var j = 0; j < numSwaps.length; j++) {
      result = result.replace(numSwaps[j], numSwaps[j][numSwaps[j].length-1]+numSwaps[j].substr(1,numSwaps[j].length-2)+numSwaps[j][0]);
    }
  }
  // Finally, we return our result
  return result; 
}

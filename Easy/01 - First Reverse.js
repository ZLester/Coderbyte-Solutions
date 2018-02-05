// Using Native Array Methods
function FirstReverse (str) {
  // First, we need to use .split to change the string into an array so it can be further manipulated.
  // Passing "" (an empty string) into the method splits the string at every character.
  str = str.split('');

  // Next, we use the reverse method to reverse the order of the elements in our newly formed array.
  // Note that only arrays have the .reverse method, which is why we had to use .split.
  str = str.reverse();

  // After that, we use the .join method to reassemble our array back into a string.
  // Passing an empty string here means that nothing gets inserted between each array element.
  str = str.join('');

  // Finally, we return the modified string
  return str;
}

// Using chaining
function FirstReverse (str) {
  return str.split('').reverse().join('');
}

// Without using native array methods
function FirstReverse (str) {
  // First, we declare a variable to hold our result and initialize it to an empty string.
  var result = '';

  // Next, we iterate over the input string in reverse, starting from the back (i = str.length - 1)...
  for (var i = str.length - 1; i >= 0; i--) {
    // ...and adding each character we hit to our result string.
    result += str[i];
  }

  // Finally, we return our result
  return result;
}

// Video Tutorial
// https://www.youtube.com/watch?v=Kk_-SvZGdto

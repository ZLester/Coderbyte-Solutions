// Step-by-step
function LookSaySequence(num) { 
  // First, we create a result variable to hold the string we're going to return
  var result = "";
  // Appending an empty string to our input number type coerces it into a string
  // This allows us to add numbers to it without JavaScript thinking we want to perform arithmetic 
  num = num + "";
  // Next, we create variables to hold our current number (intializing it to the first number in the sequence) and a counter variable to capture how many times the number has been repeated
  var currentNum = num[0];
  var counter = 1;
  // After our set-up variables have been created, we loop over each character in our input number
  // Note that we start from position 1 rather than 0 due to initializing our currentNumber to num[0]
  for (var i = 1; i < num.length; i++) {
    // If the current number is not the same as the number our loop iterates over...
    if (currentNum !== num[i]) {
      // We add the counter and current number to our result...
      result += counter;
      result += currentNum;
      // ...and change the current number to the new, different number/reset the counter to 1
      currentNum = num[i];
      counter = 1;
    } else {
      // If the number is the same, we increment the counter
      counter++;
    }
  }
  // As the above loop won't fire for the last digit in the input number, we add the counter and current number to our result one last time
  result += counter;
  result += currentNum;
  // Finally, we return our result string
  return result; 
}

// No comments
function LookSaySequence(num) { 
  var result = "";
  num = num + "";
  var currentNum = num[0];
  var counter = 1;
  for (var i = 1; i < num.length; i++) {
    if (currentNum !== num[i]) {
      result += counter;
      result += currentNum;
      currentNum = num[i];
      counter = 1;
    } else {
      counter++;
    }
  }
  result += counter;
  result += currentNum;
  return result; 
}

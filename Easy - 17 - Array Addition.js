// Note that this solution uses recursion. For a non-recursive solution, you can check out http://leaena.com/2013/08/solver-of-problems/

function ArrayAdditionI(arr) { 
  // First, we use the native sort method to order our input array from smallest to largest    
  var arr = arr.sort(function(a,b){return a-b});
  // Next, we use pop to grab the largest value. Note that this will also remove it from the array.
  var largest = arr.pop();
  // Our last bit of set-up is to create a 'result' variable that we'll change to true if we find a possible solution within our recursive inner function
  var result = false;
  
  // Now that we've prepped our input array and have a variable to store our result in, we create an inner function
  // that accepts our current sum and the position of the array element that we're adding to the sum as inputs.
  var onePerm = function(sum, i) {
    // If we don't pass anything for sum or i, these two lines will make them default to 0
    // If you're interested in diving into how these work, check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Short-Circuit_Evaluation
  	sum = sum || 0;
  	i = i || 0;
  	// Our sole base case is to check if our current sum is equal to the largest value
    if (sum === largest) {
      // If it is, we set our result to true and return out of the inner function
      result = true;
      return;
    }
    // This next loop's structure may look a little funky to some people, but since we're getting i from somewhere else we don't need a loop initialization
    // Once we've gotten to this part of the function we know that the current sum isn't equal to the largest value, so we iterate over the numbers array... 
    for (; i < arr.length; i++) {
      // Add the current number to our sum...
    	sum += arr[i];
    	// ...and call the function again, but this time passing in the modified sum and adding 1 to the i value so that our next run through will add the next value in the array
    	// Note that if i is larger or equal to the length of the array, the loop won't execute and the function will terminate
      onePerm(sum, i+1);
      // Finally, we subtract the last number we added so as to check all possible permutations
      sum -= arr[i];
    }
  };
  // Back outside of the inner function, we invoke our inner function to 'seed' it and start checking all possible permutations
  // Note that we don't have to pass anything into the function due to lines 16 and 17
  onePerm();      
  // Finally, we return our result boolean
  return result;
}

// With no comments
function ArrayAdditionI(arr) { 
  var arr = arr.sort(function(a,b){return a-b});
  var largest = arr.pop();
  var result = false;

  var onePerm = function(sum, i) {
  	sum = sum || 0;
  	i = i || 0;
  	
    if (sum === largest) {
      result = true;
      return;
    }
    for (; i < arr.length; i++) {
    	sum += arr[i];
      onePerm(sum, i+1);
      sum -= arr[i];
    }
  };
  
  onePerm();      
  return result;
}

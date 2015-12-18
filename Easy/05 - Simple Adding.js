// Step By Step Iterative Solution
function SimpleAdding(num) {
    // Declare a variable to hold our answer
    var sum = 0;

    // Loop through all numbers between num and 1 inclusive...
    for (var i = num; i > 0; i--) {
        // ...adding i to our answer each time.
        sum += i;
    }
    // Finally, we return our answer.
    return sum;
}

// Step By Step Recursive Solution 
// By Eric Ehli, https://github.com/eihli
function SimpleAdding(num, sum) {
    // If no argument is passed for sum (Coderbyte will always only pass 1 argument into our function), we set it to 0
    sum = sum | 0;
    
    // Next, we set our base case to stop the function from recursing when our input number equals 0...
    if (num === 0) {
        // ...and return our answer
        return sum;
    }
    
    // Each time we recurse through our function, we add the number to our sum variable (sum += num)...
    sum += num;
    // ...and decrease num by 1 using the decrement operator
    num--;
    
    // We return the function again and continue to add num to curSum and decrement num by 1 until num reaches 0.
    return SimpleAdding(num, sum);
}

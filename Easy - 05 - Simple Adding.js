// Iterative solution
function SimpleAdding(num) {
    // Declare a variable to hold our answer
    var sum = 0;
    
    // Loop through all numbers between num and 1 inclusive...
    for (var i = num; i > 0; i--) {
        // ...adding i to our answer each time.
        sum += i;
    }
    
    // Return our answer.
    return sum;
}

// Recursive solution
function SimpleAdding(num, sum) {
    // If no argument is passed for sum (Coderbyte will always only pass 1 argument into our function), we set it to 0
    sum = sum | 0;
    
    // We set our base case to stop the function from recursing when our input number equals 0...
    if (num === 0) {
        // ...and return our answer
        return sum;
    }
    
    // Each time we recurse through our function, we add the number to our sum variable (sum += num)...
    sum += num;
    // ...and decrease num by 1 using the decrement operator
    num--;
    
    // We return the function again and continue to add num to curSum and decrement num by 1 until num reaches 0.
    // Notice how much this function "feels" like the iterative solution above 
    return SimpleAdding(num, sum);
}

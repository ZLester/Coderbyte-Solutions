// Step By Step
function FirstFactorial(num) {
    // First, we declare a for loop starting at the parameter number - 1 (var i = num - 1)
    // We decrease i by 1 each iteration (i--) and stop when i reaches 2 (i > 1) 
    for (var i = num - 1; i > 1; i--) {
        // On each pass, we multiply the num by i
        num *= i;
    }
    // The above loop will have the effect of multiplying num by all whole integers between 2 and num-1 inclusive.
    // For instance, if we pass 4 into our function, the loop will run twice, multiplying 4*3 (12) and then 12*2 (24). 
    
    // Finally, we return our answer.
    return num;
}

// Recursive Solution
function FirstFactorial(num) {
    if (num === 1) {
        return num;
    }
    return num * FirstFactorial(num - 1);
}

// Without Comments
function FirstFactorial(num) {
    for (var i = num - 1; i > 1; i--) {
        num *= i;
    }
    return num;
}

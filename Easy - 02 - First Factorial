// Iterative solution with each step explained

function FirstFactorial(num) {
   
    // First we declare a for loop starting at the parameter number - 1 (var i = num - 1)
    // We decrease i by 1 each pass (i--) and stop when i reaches 2 (i > 1)  
    
    for (var i = num - 1; i > 1; i--) {
        
        // On each pass we multiply the num by i
        
        num *= i;
        
    }
    
    // Note that above loop will have the effect of multiplying num by all whole integers between 2 and num-1 inclusive
    // For instance, if we pass the number 4 into our function, the loop will run twice, multiplying 4*3 (12) and then 12*2 (24) 
    
    // Make sure to return the number

    return num;

}

// Using best practices

function FirstFactorial(num) {
    for (var i = num - 1; i > 1; i--) {
        num *= i;
    }
    return num;
}


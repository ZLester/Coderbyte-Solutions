// Iterative solution
function SimpleAdding(num) {
    // Declare a variable to hold our answer
    var sum = 0;
    // Loop through all numbers between 0 and num inclusive...
    for (var i = 0; i <= num; i++) {
        // ...adding i to our answer each time.
        sum += i;
    }
    // Return our answer.
    return sum;
}

// Recursive solution
function SimpleAdding(num, curSum) {

    curSum = curSum | 0;

    if (num === 0) {
        return curSum;
    }

    curSum += num;
    num--;

    return SimpleAdding(num, curSum);
}

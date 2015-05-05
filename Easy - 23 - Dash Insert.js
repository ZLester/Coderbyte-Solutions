// Step By Step
function DashInsert(num) {

    // First, we convert the input number into a string 
    // This allows us to add the character to our answer rather than summing the two. 
    num = num.toString();
    // Next, we declare and initialize a variable to hold our answer string.
    var answer = "";

    // After that, we loop through each character in our input number...
    for (var i = 0; i < num.length; i++) {
        // ...and for every character after the first, we check if the current and previous character are odd.
        if ((i > 0) && (num[i] % 2 === 1) && (num[i - 1] % 2 === 1)) {
            // If both are, we add a dash to our answer.
            answer += "-";
        }
        // No matter whether or not we add a dash, we add the current number to our answer string.
        answer += num[i];
    }

    // Finally, we return our answer.
    return answer;
}

// Best Practices
function DashInsert(num) {

    num = num.toString();
    var answer = "";

    for (var i = 0, x = num.length; i < x; i++) {
        if ((i > 0) && (num[i] % 2 === 1) && (num[i - 1] % 2 === 1)) {
            answer += "-";
        }

        answer += num[i];
    }

    return answer;
}
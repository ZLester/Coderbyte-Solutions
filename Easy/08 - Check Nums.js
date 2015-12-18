// Step By Step
function CheckNums(num1, num2) {
    
    // We check if the first number is less than the second...
    if (num1 < num2) {
        // ...if so, we return true
        return true;
    // If the first number is greater than the second...
    } else if (num1 > num2) {
        // ...we return false
        return false;
    // If neither of the above conditions are true, we know that the numbers are equal...
    } else {
        // ...and so we return the string -1.
        return "-1";
    }

}

//  Best Practices
function CheckNums(num1, num2) {

    if (num1 < num2) {
        return true;
    } else if (num1 > num2) {
        return false;
    } else {
        return "-1";
    }

}

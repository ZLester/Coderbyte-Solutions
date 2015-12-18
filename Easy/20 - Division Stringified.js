// Step By Step

function DivisionStringified(num1, num2) {

    // First, we use the Math.round method to calculate our product...
    // ...and then use the .toString method to convert the reusltant number into a string.
    var result = Math.round(num1 / num2).toString();

    // Next, we use the .split method to convert our result variable into an array so it can be further manipulated.
    // Note that we pass in an empty string ("") into the .split method to split the result variable at every character.
    var resultArr = result.split("");

    // Next, we check if our result is greater than 1000.
    if (result >= 1000) {

        // If it is, we loop through each item in our result array...
        // ...starting at the third character from the end (i = result.length - 3)...
        // ...moving back three charactres each time (i -= 3)...
        // ...and stopping when we get to the start of the string (i > 0)
        for (var i = result.length - 3; i > 0; i -= 3) {

            // At every third character we use the .splice method to insert a comma.
            // Note that the first arguement of the .splice is where the method inserts things into the array (i), 
            // ...the second controls how many array items are removed (0), 
            // ...and the third controls what is inserted (",").
            resultArr.splice(i, 0, ",");
        }
    }

    // Finally, we return our result array with the .join method to covert it into a string.
    return resultArr.join("");
}

// Best Practices
function DivisionStringified(num1, num2) {

    var result = Math.round(num1 / num2).toString(),
        resultArr = result.split("");

    if (result >= 1000) {
        for (var i = result.length - 3; i > 0; i -= 3) {
            resultArr.splice(i, 0, ",");
        }
    }

    return resultArr.join("");
}
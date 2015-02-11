// Step By Step
function ExOh(str) {

    // First, we declare two variables:
    // One which remove all characters in the string that aren't x's...
    var strX = str.replace(/[^x]/g, "");

    // ...and and the second which removes all characters that aren't o's
    var strO = str.replace(/[^o]/g, "");

    // Next, we get the length of each of these new variables to determine how many x's and o's are in the string...
    var xNumber = strX.length;
    var oNumber = strO.length;

    // ...and return the truth value of comparing the two.
    return xNumber === oNumber;
}

// Best Practices
function ExOh(str) {

    return str.replace(/[^x]/g, "").length === str.replace(/[^o]/g, "").length;
}
   

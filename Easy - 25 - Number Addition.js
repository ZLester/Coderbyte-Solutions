// Step By Step
function NumberAddition(str) {

    str = str.split(/[a-zA-Z]/);
    var sum = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] != "") {
            sum += parseInt(str[i]);
        }
    }

    return sum;
}

// Best Practices
function NumberAddition(str) {

    str = str.split(/[a-zA-Z]/);
    var sum = 0;

    for (var i = 0, x = str.length; i < x; i++) {
        if (str[i] != "") {
            sum += parseInt(str[i]);
        }
    }

    return sum;
}

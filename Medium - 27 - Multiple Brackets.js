function MultipleBrackets(str) {

    var leftPCount = 0;
    var rightPCount = 0;
    var leftBCount = 0;
    var rightBCount = 0;

    for (var i = 0; i <= str.length; i++) {
        if (str[i] == "(") {
            leftPCount++;
        } else if (str[i] == ")") {
            rightPCount++;
        }
        if (rightPCount > leftPCount) {
            return 0;
        }

        if (str[i] == "[") {
            leftBCount++;
        } else if (str[i] == "]") {
            rightBCount++;
        }
        if (rightBCount > leftBCount) {
            return 0;
        }

    }

    if ((leftPCount == rightPCount) && (leftBCount == rightBCount)) {
        return "1 " + (leftPCount + leftBCount);
    }
    return 0;

}

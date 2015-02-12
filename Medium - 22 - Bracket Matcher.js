function BracketMatcher(str) {

    var leftCount = 0;
    var rightCount = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] == "(") {
            leftCount++;
        } else if (str[i] == ")") {
            rightCount++;
        }
        if (rightCount > leftCount) {
            return 0;
        }
    }

    if (leftCount == rightCount) {
        return 1;
    } else {
        return 0;
    }

}

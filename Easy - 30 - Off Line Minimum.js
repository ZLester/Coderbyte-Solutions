function OffLineMinimum(strArr) {

    var numTest = /[0-9]/;
    var numArr = [];
    var answerArr = [];
    var lowest = 10;
    var lowestInd = 0;

    for (var i = 0; i < strArr.length; i++) {
        if (numTest.test(strArr[i])) {
            numArr.push(strArr[i]);
        } else {
            for (var j = 0; j < numArr.length; j++) {
                if (numArr[j] < lowest) {
                    lowest = numArr[j];
                    lowestInd = numArr.indexOf(lowest);
                }
            }
            answerArr.push(lowest);
            lowest = 10;
            numArr.splice(lowestInd, 1);
        }
    }

    return answerArr.join(",");
}

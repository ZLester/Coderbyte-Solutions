function AdditivePersistence(num) {

    var addPer = 0;

    function splitArray(intN) {
        intN = intN.toString().split("");
        var answerArr = [];
        for (var i = 0; i < intN.length; i++) {
            answerArr.push(parseInt(intN[i]));
        }
        return answerArr;
    }

    function add(array) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }

    while (num.toString().length > 1) {
        num = splitArray(num);
        num = add(num);
        addPer++;
    }

    return addPer;
}

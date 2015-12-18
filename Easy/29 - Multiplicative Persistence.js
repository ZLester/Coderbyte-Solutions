function MultiplicativePersistence(num) {
  
    var multiPer = 0;
  
    function splitArray(intN) {
        intN = intN.toString().split("");
        var answerArr = [];
        for (i = 0; i < intN.length; i++) {
            answerArr.push(parseInt(intN[i]));
        }
        return answerArr;
    }
    function mult(array) {
        var product = 1;
        for (i = 0; i < array.length; i++) {
            product *= array[i];
        }
        return product;
    }

    while (num.toString().length > 1) {
        num = splitArray(num);
        num = mult(num);
        multiPer++;
    }
  
    return multiPer;
}

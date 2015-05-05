function CaesarCipher(str, num) {

    var alphaStrLow = "abcdefghijklmnopqrstuvwxyz";
    var alphaStrUpp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var currentLetterInd = 0;
    var newLetterInd = 0;
    var answer = "";
    var lowerTest = /[a-z]/;
    var upperTest = /[A-Z]/;

    for (i = 0; i < str.length; i++) {
        if (upperTest.test(str[i])) {
            currentLetterInd = alphaStrUpp.indexOf(str[i]);
            newLetterInd = (currentLetterInd + num) % 26;
            answer += alphaStrUpp[newLetterInd];
        } 
      else if (lowerTest.test(str[i])) {
            currentLetterInd = alphaStrLow.indexOf(str[i]);
            newLetterInd = (currentLetterInd + num) % 26;
            answer += alphaStrLow[newLetterInd];
        } 
      else {
            answer += str[i];
        }
    }

    return answer;

}

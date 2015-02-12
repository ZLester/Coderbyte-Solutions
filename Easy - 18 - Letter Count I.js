function LetterCountI(str) {

    var words = str.split(" ");
    var largestDif = 0;
    var answer;

    for (var i = 0; i < words.length; i++) {
        var currentWord = words[i];
        var currentWordLength = words[i].length;
        var currentWordSorted = words[i].split("").sort();
        for (var j = 0; j < (words[i].length - 1); j++) {
            if (currentWordSorted[j] === currentWordSorted[j + 1]) {
                currentWordSorted.splice(j, 1);
            }
            var currentDif = (currentWordLength - currentWordSorted.length);
            if (currentDif > largestDif) {
                largestDif = currentDif;
                answer = currentWord;
            }
        }
    }
    
    if (largestDif > 0) {
        return answer;
    } else {
        return -1;
    }

}

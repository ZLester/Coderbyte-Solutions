function LetterCount(str) { 

  var wordArr = str.split(" ");
  var currentDif = 0;
  var largestDif = 0;
  var answer;
  var currentWord;
  var currentWordLength;
  var currentWordR;
  var currentWordRLength;
  
  for (i=0;i<wordArr.length;i++) {
  currentWord = wordArr[i].split("").sort();
  currentWordLength = currentWord.length;
    for (j=0;j<currentWordLength-1;j++) {
      if (currentWord[j]===currentWord[j+1]) {
      currentWord.splice(j,1);
      }
    }
  currentWordR = currentWord;
  currentWordRLength = currentWordR.length;
  currentDif = (currentWordLength - currentWordRLength);
  
    if (currentDif>largestDif) {
    largestDif = currentDif;
    answer = wordArr[i];
    }
  
  }
  if (largestDif>0) {
  return answer;
  }
  else {
  return -1;
  }
         
}

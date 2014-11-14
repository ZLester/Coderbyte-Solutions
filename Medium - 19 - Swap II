function SwapII(str) { 

  var testChar = /[a-zA-Z]/;
  var testSwap = /[0-9][a-zA-Z]+[0-9]/g;
  var answer = "";
  for (i=0;i<str.length;i++) {
    if (testChar.test(str[i])) {
      if (str[i] == str[i].toUpperCase()) {
      answer += str[i].toLowerCase();
      }
      else if (str[i] == str[i].toLowerCase()) {
      answer += str[i].toUpperCase();
      }
      }
    else {
    answer += str[i];
    }
  }
  var numSwaps = answer.match(testSwap);
  if (numSwaps !== null) {
    for (i=0;i<numSwaps.length;i++) {
    answer = answer.replace(numSwaps[i],numSwaps[i][numSwaps[i].length-1]+numSwaps[i].substr(1,numSwaps[i].length-2)+numSwaps[i][0]);
    }
  }
  return answer; 
         
}

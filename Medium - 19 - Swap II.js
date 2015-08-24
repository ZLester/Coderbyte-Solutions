function SwapII(str) { 
  var testChar = /[a-zA-Z]/;
  var testSwap = /[0-9][a-zA-Z]+[0-9]/g;
  var answer = "";
  for (var i=0; i < str.length; i++) {
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
    for (var j = 0; j < numSwaps.length; j++) {
      answer = answer.replace(numSwaps[j], numSwaps[j][numSwaps[j].length-1]+numSwaps[j].substr(1,numSwaps[j].length-2)+numSwaps[j][0]);
    }
  }
  return answer; 
}

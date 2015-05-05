function NumberSearch(str) { 

  var notAlpha = /[^a-zA-Z]/g;
  var notNum = /[^0-9]/g;
  var sum = 0;
  var alphaCount = 0;
  
  var strAlpha = str.replace(notAlpha, "");
  var strNum = str.replace(notNum, "");
  
  for (i=0;i<strAlpha.length;i++) {
    alphaCount++;
  }
 
  for (i=0;i<strNum.length;i++) {
    sum += parseInt(strNum[i]);
  }
  
  return Math.round(sum/alphaCount);
         
}

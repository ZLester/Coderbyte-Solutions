function NumberSearch (str) {
  var notAlpha = /[^a-zA-Z]/g;
  var notNum = /[^0-9]/g;
  var sum = 0;
  var alphaCount = 0;

  var strAlpha = str.replace(notAlpha, '');
  var strNum = str.replace(notNum, '');

  for (var i = 0; i < strAlpha.length; i++) {
    alphaCount++;
  }

  for (var j = 0; j < strNum.length; j++) {
    sum += parseInt(strNum[j]);
  }

  return Math.round(sum / alphaCount);
}

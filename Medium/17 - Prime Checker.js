function PrimeChecker (num) {
  function permute (num) {
    num = num.toString().split('');
    var answerArr = [];
    var outerLength = num.length;
    var innerLength = 1;
    var startItem;
    var moveItem;
    for (var i = 1; i < num.length; i++) {
      innerLength *= i;
    }

    for (var j = 0; j < outerLength; j++) {
      startItem = num[j];
      num.splice(j, 1);

      for (var k = 0; k < innerLength + 1; k++) {
        moveItem = num.shift();
        num.splice(k, 0, moveItem);
        if (k < innerLength) {
          answerArr.push(parseInt(startItem + num.join('')));
        }
      }
      num.splice(j, 0, startItem);
    }
    return answerArr;
  }

  function isPrime (num) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    if (num === 1) {
      return false;
    }
    return true;
  }

  var possibleCombos = permute(num);
  var foundPerms = 0;

  for (var k = 0; k < possibleCombos.length; k++) {
    if (isPrime(possibleCombos[k])) {
      foundPerms = 1;
    }
  }

  return foundPerms;
}

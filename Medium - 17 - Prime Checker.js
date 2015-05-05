function PrimeChecker(num) {

    function permute(num) {

        num = num.toString().split("");
        var answerArr = [];
        var outerLength = num.length;
        var innerLength = 1;
        var startItem;
        var moveItem;
        for (i = 1; i < num.length; i++) {
            innerLength *= i;
        }

        for (i = 0; i < outerLength; i++) {
            startItem = num[i];
            num.splice(i, 1);

            for (j = 0; j < innerLength+1; j++) {

                moveItem = num.shift();
                num.splice(j, 0, moveItem);
            if (j<innerLength) {
            answerArr.push(parseInt(startItem + num.join("")));
        }
            }
            num.splice(i, 0, startItem);
        }
        return answerArr;
    }

    function isPrime(num) {
        
        for (i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
      if (num == 1) {
      return false;
      }
      else {
        return true;
      }
    }


    var possibleCombos = permute(num);
    var foundPerms = 0;
    
    for (k = 0; k < possibleCombos.length; k++) {

        if (isPrime(possibleCombos[k])) {
            foundPerms = 1;
        }

    }

return foundPerms;
}

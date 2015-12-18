// Solution by Matt Larsh
// https://github.com/MattLarsh

function PermutationStep(num) {
    var permArr = [];
    var usedChars = [];

    function permute(numArr) {
        var i, ch;
        for (i = 0; i < numArr.length; i++) {
            ch = numArr.splice(i, 1)[0];
            usedChars.push(ch);
            if (numArr.length === 0) {
                permArr.push(usedChars.slice());
            }
            permute(numArr);
            numArr.splice(i, 0, ch);
            usedChars.pop();
        }
        return permArr;
    }
    permute(String(num).split(""));

    for (var i = 0; i < permArr.length; i++) {
        permArr[i] = Number(permArr[i].join(''));
    }

    permArr = permArr.sort(function (a, b) {
        return a - b;
    });

    for (var j = 0; j < permArr.length; j++) {
        if (permArr[j] > num) {
            return permArr[j];
        }
    }

    return -1;
}

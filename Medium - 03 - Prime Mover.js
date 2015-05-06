function PrimeMover(mynum) {

    function test(num) {
        var isPrime = true;
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                var isPrime = false;
            }
        }
        return isPrime;
    }
}

var primeArr = [2];

for (var k = 2; k < 10000; k++) {
    if (test(k)) {
        primeArr.push(test(k));
    }
}

return primeArr[mynum];

}
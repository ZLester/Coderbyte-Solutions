
function PrimeMover(mynum) {

    function test(num) {
        var isPrime = true;
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
            }
        }
        return isPrime;
    }

    var primeArr = [2];
    var cur = 3;
    
    while (primeArr.length < mynum) {
        if (test(cur)) {
            primeArr.push(cur);
        }
        cur++;
    }

    return primeArr.pop();

}
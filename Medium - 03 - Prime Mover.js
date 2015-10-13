
function PrimeMover(num) {

    var isPrime = function(num) {
        for (var i = 2; i < num; i++) {
            if (num % i === 0 && i !== num) {
                return false;
            }
        }
        return true;
    };

    var primeArr = [];
    var cur = 2;
    
    while (primeArr.length < num) {
        if (isPrime(cur)) {
            primeArr.push(cur);
        }
        cur++;
    }
    return primeArr.pop();
}

// Not my original solution, as this was one of the only Easy problems that exceeded my knowledge of JS at the time I first attempted it
// All credit to Lindsey Smith at Leaena.com
function ArrayAdditionI(arr) {

    arr.sort(function (a, b) {return a - b;});
    var largest = arr.pop();
    var sum = 0;
    
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum === largest) {
            return true;
        }
        
        for (j = 0; j < arr.length; j++) {
            if (i !== j) {
                sum += arr[j];
                if (sum === largest) {
                    return true;
                }
            }
        }
        for (k = 0; k < arr.length; k++) {
            if (i !== k) {
                sum -= arr[k];
                if (sum === largest) {
                    return true;
                }
            }
        }
        sum = 0;
    }
    
    return false;
}

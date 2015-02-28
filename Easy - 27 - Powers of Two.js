// Won't work for numbers greater than what the scouter says about his power level.
function PowersofTwo(num) {

    for (var i = 0; i < 9000; i++) {
        if (num === Math.pow(2, i)) {
            return true;
        }
    }

    return false;
}

function Division(num1, num2) {
    var largestFactor = 1;
    var smallerNum;
    
    if (num1 > num2) {
        smallerNum = num2;
    } else {
        smallerNum = num1;
    }

    for (i = 1; i <= smallerNum; i++) {
        if ((num1 % i === 0) && (num2 % i === 0) && (i > largestFactor)) {
            largestFactor = i;
        }
    }
    return largestFactor;
}

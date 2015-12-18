function TripleDouble(num1, num2) {

    num1 = num1.toString();
    num2 = num2.toString();
    var triples = [];
    var doubles = [];

    for (var i = 0; i < num1.length; i++) {
        if ((num1[i] == num1[i + 1]) && (num1[i] == num1[i + 2])) {
            triples.push(num1[i] + num1[i + 1]);
        }
    }
    for (var j = 0; j < num2.length; j++) {
        if (num2[j] == num2[j + 1]) {
            doubles.push(num2[j] + num2[j + 1]);
        }
    }

    for (var k = 0; k < triples.length; k++) {
        if (triples.indexOf(doubles[k]) != -1) {
            return 1;
        }
    }
    return 0;
}

function RunLength(str) {

    var count = 1;
    var result = "";

    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result += count + str[i];
            count = 1;
        }
    }
    return result;
}

function RunLength(str) {

    str = str.split("");
    var count = 1;
    var answer = "";

    for (var i = 0; i < tsr.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            answer += count.toString() + str[i].toString();
            count = 1;
        }
    }
    return answer;
}

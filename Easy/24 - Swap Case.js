function SwapCase(str) {

    var answer = "";

    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            answer += str[i].toLowerCase();
        } else if (str[i] === str[i].toLowerCase()) {
            answer += str[i].toUpperCase();
        } else {
            answer += str[i];
        }
    }

    return answer;
}
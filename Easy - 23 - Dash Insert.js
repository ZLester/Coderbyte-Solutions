function DashInsert(num) {

    num = num.toString();
    var answer = "";

    for (i = 0; i < num.length; i++) {
        if ((i > 0) && (num[i] % 2 === 1) && (num[i - 1] % 2 === 1)) {
            answer += "-";
        }
        answer += num[i];
    }

    return answer;
}

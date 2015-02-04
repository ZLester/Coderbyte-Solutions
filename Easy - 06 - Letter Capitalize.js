function LetterCapitalize(str) {

    str = str.split(" ");

    for (i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    str = str.join(" ");

    return str;
}

function LetterCapitalize(str) {

    str = str.split(" ");

    for (i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

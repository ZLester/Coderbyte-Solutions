function ArithGeo(arr) {

    var arrDif = [];
    var arrQuo = [];
    var arrFlag = true;
    var geoFlag = true;

    for (i = 0; i < arr.length - 1; i++) {
        arrDif.push(arr[i + 1] - arr[i]);
        arrQuo.push(arr[i + 1] / arr[i]);
    }

    for (i = 0; i < arrDif.length - 1; i++) {
        if (arrDif[i] != arrDif[i + 1]) {
            arrFlag = false;
        }
        if (arrQuo[i] != arrQuo[i + 1]) {
            geoFlag = false;
        }
    }

    if (arrFlag) {
        return "Arithmetic";
    } else if (geoFlag) {
        return "Geometric";
    } else {
        return -1;
    }

}

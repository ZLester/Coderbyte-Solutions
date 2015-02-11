function MeanMode(arr) {

    var modeArr = [];
    var mode = 0;
    var modeCount = 0;
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {

        sum += arr[i];

        if (modeArr[arr[i]]) {
            modeArr[arr[i]]++;
        } else {
            modeArr[arr[i]] = 1;
        }
        if (modeArr[arr[i]] > modeCount) {
            mode = arr[i];
            modeCount = modeArr[arr[i]];
        }
    }

    var mean = sum / arr.length;

    if (mean == mode) {
        return 1;
    } else {
        return 0;
    }

}

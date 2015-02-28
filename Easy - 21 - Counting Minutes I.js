function CountingMinutesI(str) {

    var timeArray = str.split("-");
    var startTime = timeArray[0];
    var endTime = timeArray[1];
    var startTimeArr = startTime.split(":");
    var startTimeHour = parseInt(startTimeArr[0]);
    var startTimeMinute = parseInt(startTimeArr[1].replace(/[^0-9]/g, ""));
    var startTimeAMPM = startTimeArr[1].replace(/[^a-zA-Z]/g, "");
    var endTimeArr = endTime.split(":");
    var endTimeHour = parseInt(endTimeArr[0]);
    var endTimeMinute = parseInt(endTimeArr[1].replace(/[^0-9]/g, ""));
    var endTimeAMPM = endTimeArr[1].replace(/[^a-zA-Z]/g, "");

    if ((startTimeHour !== 12) && (startTimeAMPM === "pm")) {
        startTimeHour += 12;
    }
    if ((endTimeHour !== 12) && (endTimeAMPM === "pm")) {
        endTimeHour += 12;
    }
    if ((startTimeHour === 12) && (startTimeAMPM === "am")) {
        startTimeHour -= 12;
    }
    if ((endTimeHour === 12) && (endTimeAMPM === "am")) {
        endTimeHour -= 12;
    }

    if ((startTimeHour > endTimeHour) || ((startTimeHour === endTimeHour) && (startTimeMinute > endTimeMinute))) {
        return (1440 + ((endTimeHour - startTimeHour) * 60) + (endTimeMinute - startTimeMinute));
    } else {
        return ((endTimeHour - startTimeHour) * 60) + (endTimeMinute - startTimeMinute);
    }
}

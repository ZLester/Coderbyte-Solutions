function CountingMinutes(str) { 

  str = str.split("-");
  var startTime = str[0].split(":");
  var endTime = str[1].split(":");
  var startHour = parseInt(startTime[0]);
  var startMinutes = parseInt(startTime[1].replace(/[^0-9]/g,""));
  var startAMPM = startTime[1].replace(/[^a-zA-Z]/g,"");
  var endHour = parseInt(endTime[0]);
  var endMinutes = parseInt(endTime[1].replace(/[^0-9]/g,""));
  var endAMPM = endTime[1].replace(/[^a-zA-Z]/g,"");

  if ((startHour != 12) &&  (startAMPM == "pm")) {
  startHour += 12;
  }
  if ((startHour == 12) && (startAMPM == "am")) {
  startHour -= 12;
  }    
  if ((endHour != 12) &&  (endAMPM == "pm")) {
  endHour += 12;
  }
  if ((endHour == 12) && (endAMPM == "am")) {
  endHour -= 12;
  }   

  var timeDif = ((endHour - startHour) * 60) + (endMinutes - startMinutes);
  
  if (timeDif < 0) {
  return 1440 + timeDif;
  }
  else {
  return timeDif;
  }
} 

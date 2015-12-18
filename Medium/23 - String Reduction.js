function StringReduction(str) { 
  
  str = str.split("");
  
  function notAllSame() {
    for (var j = 0; j < str.length; j++) {
      if (str[0] === str[j]) {
        continue;
      }
      else {
        return true;
      }
    }
    return false;
  }
  
  while (notAllSame()) {
    for (var i = 0; i < str.length; i++) {
      if (str[i] + str[i+1] == "ab") {
        str.splice(i,2,"c");
      }
      if ((str[i] === "a") && (str[i+1] == "c")) {
        str.splice(0,2,"b");
      }
      if ((str[i] === "b") && (str[i+1] == "c")) {
        str.splice(i,2,"a");
      }
      if ((str[i] === "b") && (str[i+1] == "a")) {
        str.splice(i,2,"c");
      }
      if ((str[i] === "c") && (str[i+1] == "b")) {
        str.splice(i,2,"a");
      }
      if ((str[i] === "c") && (str[i+1] == "a")) {
        str.splice(i,2,"b");
      }
    }
  }
  return str.length;
}

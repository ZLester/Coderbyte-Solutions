function ArithGeoII(arr) { 
  
  var diffArr = [];
  var geoArr = [];
  var geoFlag = true;
  var arithFlag = true;
  
  for (var i = 0; i < arr.length - 1; i++) {
  diffArr.push(arr[i+1]-arr[i]);
  geoArr.push(arr[i+1]/arr[i]);
  }
  
  for (var j = 0; j < diffArr.length - 1; j++) {
    if (diffArr[j] !== diffArr[j+1]) {
      arithFlag = false;
    }
    if (geoArr[j] !== geoArr[j+1]) {
      geoFlag = false;    
    }
  }

  if (arithFlag) {
    return "Arithmetic";
  }
  else if (geoFlag) {
    return "Geometric";
  }
  else {
    return -1;
  }
}

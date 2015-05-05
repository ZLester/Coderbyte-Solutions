function ArithGeoII(arr) { 
  var diffArr = [];
  var geoArr = [];
  var geoFlag = true;
  var arithFlag = true;
  for (i=0;i<arr.length-1;i++) {
  diffArr.push(arr[i+1]-arr[i]);
  geoArr.push(arr[i+1]/arr[i]);
  }
  for (i=0;i<diffArr.length-1;i++) {
    if (diffArr[i] !== diffArr[i+1]) {
    arithFlag = false;
    }
    if (geoArr[i] !== geoArr[i+1]) {
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

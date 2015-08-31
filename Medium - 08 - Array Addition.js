function ArrayAddition(arr) { 

  var largest = arr.sort(function(a,b){return a-b}).pop();
  var sum = 0;
  
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum===largest) {
      return true;
    }
    
    for (var j = 0; j < arr.length; j++) {
      if (j!==i) {
        sum += arr[j];
      }
      if (sum===largest) {
      return true;
      }
    }
    
    for (var k = 0; k < arr.length; k++) {
      if (k !== i) {
        sum -= arr[k];
      }
      if (sum===largest) {
        return true;
      }
    }
    
    sum = 0;
  }
  
  return false;      
}

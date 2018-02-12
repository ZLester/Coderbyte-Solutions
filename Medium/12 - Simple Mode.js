function SimpleMode (arr) {
  var map = {};
  var mode = 0;
  var highestFreq = 0;

  for (var i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]]++;
    } else {
      map[arr[i]] = 1;
    }
  }

  for (var j = 0; j < arr.length; j++) {
    if (map[arr[j]] > highestFreq) {
      highestFreq = map[arr[j]];
      mode = arr[j];
    }
  }

  if (highestFreq !== 1) {
    return mode;
  }
  return -1;
}

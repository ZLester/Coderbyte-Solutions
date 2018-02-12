function Consecutive (arr) {
  arr = arr.sort(function (a, b) { return a - b; });
  var diffArr = [];
  var diffArrSum = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    diffArr.push((arr[i + 1] - arr[i]) - 1);
  }
  for (var j = 0; j < diffArr.length; j++) {
    diffArrSum += diffArr[j];
  }
  return diffArrSum;
}

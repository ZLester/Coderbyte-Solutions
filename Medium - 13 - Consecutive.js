function Consecutive(arr) { 

  arr = arr.sort(function(a,b){return a-b});
  var diffArr = [];
  var diffArrSum = 0;
  for(i=0;i<arr.length-1;i++) {
  diffArr.push((arr[i+1]-arr[i])-1);
  }
  for(i=0;i<diffArr.length;i++) {
  diffArrSum+=diffArr[i];
  }
  return diffArrSum;     
}

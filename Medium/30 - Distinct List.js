function DistinctList(arr) { 

  arr = arr.sort(function(a,b){return a-b});
  var startLength = arr.length;
    for (i=arr.length-1;i>0;i--) {
      if (arr[i] === arr[i-1]) {
      arr.splice(i,1);
      }
    }
  var endLength = arr.length;
  
  return startLength - endLength; 
         
}

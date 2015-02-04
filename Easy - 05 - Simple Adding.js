// Iterative solution
function SimpleAdding(num) { 

  var sum = 0;
  
  for (var i = 0; i <= num; i++) {
    sum += i;
  } 
  
  return sum; 
}

// Recursive solution
function SimpleAdding(num, curSum) {
  
  curSum = curSum | 0;
  
  if (num === 0){
    return curSum;
  }
  
  curSum += num;
  num--;
  
  return recursiveAdding(num, curSum);
}

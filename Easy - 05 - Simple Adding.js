function SimpleAdding(num) { 

  var sum = 0;
  
  if (num < 0){
    throw "Number must be non-negative.";
  }

  for (var i = 0; i <= num; i++) {
    sum += i;
  } 
  
  return sum; 

}

function SimpleAdding(num, curSum) {
  curSum = curSum | 0;
  if (num == 0){
    return curSum;
  }
  curSum += num;
  num--;
  return recursiveAdding(num, curSum);
}

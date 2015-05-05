function FibonacciChecker(num) { 
  var fibSeq = [0,1];
  for (i=0;i<=100000;i++) {
  fibSeq.push(fibSeq[i]+fibSeq[i+1]);
    
  }
  if (fibSeq.indexOf(num) != -1) {
  return "yes";
  } 
  else  {
  return "no";
  }
    
         
}

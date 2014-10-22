function PrimeMover(mynum) { 
  
  function test(num) { 
  var isPrime = true;
  for (i=2;i<num;i++) {
    if (num%i === 0) {
    var isPrime = false;
    }
  }
  if (isPrime) {
    return num;
  }      
  }
  
  var primeArr = [];
  primeArr.push(2);
  for (k=2;k<10000;k++) {
    if (test(k) !== undefined) {
    primeArr.push(test(k));
    }
  } 
  return primeArr[mynum];
}

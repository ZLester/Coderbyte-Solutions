function BinaryConverter(str) { 

  str = str.split("").reverse();
  var sum = 0;
  if (str[0]==1) {
  sum += 1;
  }
  
  for(i=1;i<str.length;i++) {
    if (str[i]==1){    
    sum += Math.pow(2,i);
    }
    }
    
  return sum; 
         
}

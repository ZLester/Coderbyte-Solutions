function DivisionStringified(num1,num2) { 
  
  var result = Math.round(num1/num2);
  result = result.toString();
  var resultArr = result.split("");
  
  if (result >= 1000) {
  for (i=result.length-3;i>0;i-=3){
    resultArr.splice(i,0,",");
    }
  }
  
  resultArr = resultArr.join("");
  return resultArr; 
  
}

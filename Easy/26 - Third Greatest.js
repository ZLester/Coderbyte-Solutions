function ThirdGreatest(strArr) { 

  strArr = strArr.sort(function (a, b) {return b.length - a.length});
  return strArr[2]; 
         
}

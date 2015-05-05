function DashInsertII(num) { 

  num = num.toString().split("");
  var answer = "";
  for (i=0;i<num.length;i++) {
    if ((num[i]%2===1) && (num[i+1]%2===1)) {
    answer += num[i] + "-";
    }
    else if ((num[i]!=0) && (num[i+1]!=0) && (num[i]%2===0) && (num[i+1]%2===0)) {
    answer += num[i] + "*";
    }
    else {
    answer += num[i];
    }
  }
  return answer; 
         
}

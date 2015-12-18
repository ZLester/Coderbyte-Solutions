function PowersofTwo(num) { 
  
while (num > 1)  {
  if (num%2 !== 0) {
    return false;}
num = Math.floor(num/2);
}
return true;
}
